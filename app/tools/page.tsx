import type { Metadata } from "next";
import { Tools } from "@/components/Catalog";

export const metadata: Metadata = { title: "Social media tools" };

export default function Page() {
  return <Tools />;
}
