import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";
import { PATH_IDS, topicById } from "@/lib/content";

export function generateStaticParams() {
  return PATH_IDS.map((id) => ({ id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const t = topicById(params.id);
  return { title: t?.title ?? "Lesson", description: t?.simple };
}

export default function Page({ params }: { params: { id: string } }) {
  return <TopicPage id={params.id} />;
}
