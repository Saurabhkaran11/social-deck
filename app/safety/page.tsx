import type { Metadata } from "next";
import Safety from "@/components/Safety";

export const metadata: Metadata = { title: "Stay safe on social media" };

export default function Page() {
  return <Safety />;
}
