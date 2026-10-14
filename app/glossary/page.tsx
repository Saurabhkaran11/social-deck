import type { Metadata } from "next";
import { Glossary } from "@/components/Resources";

export const metadata: Metadata = { title: "Glossary" };

export default function Page() {
  return <Glossary />;
}
