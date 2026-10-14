import type { Metadata } from "next";
import { Ideas } from "@/components/Catalog";

export const metadata: Metadata = { title: "Business ideas" };

export default function Page() {
  return <Ideas />;
}
