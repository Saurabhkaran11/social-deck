import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";
import { PATH_IDS, topicById } from "@/lib/content";

export function generateStaticParams() {
  return PATH_IDS.map((id) => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const t = topicById(id);
  return { title: t?.title ?? "Lesson", description: t?.simple };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <TopicPage id={id} />;
}
