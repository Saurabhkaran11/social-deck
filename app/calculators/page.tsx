import type { Metadata } from "next";
import { Calculators } from "@/components/Resources";

export const metadata: Metadata = { title: "Calculators" };

export default function Page() {
  return <Calculators />;
}
