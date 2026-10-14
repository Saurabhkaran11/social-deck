import type { Metadata } from "next";
import Platforms from "@/components/Platforms";

export const metadata: Metadata = { title: "Platform guide" };

export default function Page() {
  return <Platforms />;
}
