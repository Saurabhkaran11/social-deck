import type { Metadata } from "next";
import { Launch } from "@/components/Resources";

export const metadata: Metadata = { title: "Launch guide" };

export default function Page() {
  return <Launch />;
}
