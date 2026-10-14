import type { Metadata } from "next";
import { Careers } from "@/components/Catalog";

export const metadata: Metadata = { title: "Social media careers" };

export default function Page() {
  return <Careers />;
}
