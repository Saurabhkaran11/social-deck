import type { Metadata } from "next";
import { YouTube } from "@/components/Resources";

export const metadata: Metadata = { title: "Learn on YouTube" };

export default function Page() {
  return <YouTube />;
}
