export default function Loading() {
  return (
    <div role="status" className="flex min-h-[50vh] items-center justify-center px-4 py-24">
      <span
        aria-hidden="true"
        className="h-10 w-10 animate-spin rounded-full border-4 border-teal-100 border-t-teal-700 motion-reduce:animate-none"
      />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
