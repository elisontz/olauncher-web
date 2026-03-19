import { notFound } from "next/navigation";

import { getContent } from "@/content";
import { locales, normalizeLocale } from "@/lib/site";

type Params = { locale: string };

export const runtime = "edge";

export default async function RefundPage({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }
  const content = getContent(normalizeLocale(locale));

  return (
    <main className="legal-page">
      <h1>{content.legal.refundTitle}</h1>
      <section className="legal-block">
        <p>{content.legal.refundBody}</p>
      </section>
    </main>
  );
}
