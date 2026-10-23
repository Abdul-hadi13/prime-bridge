import { Pool } from "pg";

// Vercel Postgres / Neon integrations expose the connection string as
// DATABASE_URL (or POSTGRES_URL on older setups).
const connectionString = process.env.DATABASE_URL ?? process.env.POSTGRES_URL;

let pool: Pool | undefined;
let schemaReady: Promise<void> | undefined;

export function isDatabaseConfigured() {
  return Boolean(connectionString);
}

function getPool() {
  if (!connectionString) throw new Error("DATABASE_URL is not set");
  pool ??= new Pool({ connectionString, max: 1 });
  return pool;
}

// Creates the table the first time it is needed in each server instance.
// IF NOT EXISTS makes it safe to run from many instances at once.
// ip_hash is a one-way hash of the sender's IP, used only for rate limiting.
function ensureSchema() {
  schemaReady ??= getPool()
    .query(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id          BIGSERIAL PRIMARY KEY,
        created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
        name        TEXT NOT NULL,
        email       TEXT NOT NULL,
        service     TEXT NOT NULL,
        message     TEXT NOT NULL DEFAULT '',
        ip_hash     TEXT
      );
      ALTER TABLE contact_submissions ADD COLUMN IF NOT EXISTS ip_hash TEXT;
      CREATE INDEX IF NOT EXISTS contact_submissions_ip_hash_created_at
        ON contact_submissions (ip_hash, created_at);
    `)
    .then(() => undefined)
    .catch((err) => {
      schemaReady = undefined; // allow a retry on the next submission
      throw err;
    });
  return schemaReady;
}

export async function countRecentSubmissions(ipHash: string, windowMinutes: number) {
  await ensureSchema();
  const { rows } = await getPool().query<{ count: string }>(
    "SELECT COUNT(*)::text AS count FROM contact_submissions WHERE ip_hash = $1 AND created_at > now() - make_interval(mins => $2)",
    [ipHash, windowMinutes],
  );
  return Number(rows[0]?.count ?? 0);
}

export async function insertContactSubmission(row: {
  name: string;
  email: string;
  service: string;
  message: string;
  ipHash: string | null;
}) {
  await ensureSchema();
  await getPool().query(
    "INSERT INTO contact_submissions (name, email, service, message, ip_hash) VALUES ($1, $2, $3, $4, $5)",
    [row.name, row.email, row.service, row.message, row.ipHash],
  );
}
