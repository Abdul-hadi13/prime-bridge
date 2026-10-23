import { ImageResponse } from "next/og";
import { ShareCard } from "@/lib/share-card";

export const alt = "Prime Bridge medical billing, coding and credentialing services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<ShareCard />, { ...size });
}
