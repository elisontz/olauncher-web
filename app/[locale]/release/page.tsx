import { notFound } from "next/navigation";

import { getContent } from "@/content";
import { locales, normalizeLocale, getAllReleases } from "@/lib/site";

type Params = { locale: string };

export const runtime = "edge";

export default async function ReleasePage({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }
  const normalized = normalizeLocale(locale);
  const content = getContent(normalized);
  const releases = await getAllReleases(normalized);

  return (
    <main className="legal-page">
      <h1>{content.release.title}</h1>
      {releases.length > 0 ? (
        releases.map((entry) => (
          <section key={entry.version} className="legal-block">
            <h2>
              {entry.version} <span>{entry.date}</span>
            </h2>
            {entry.notes.length > 0 && (
              <ul>
                {entry.notes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            )}
          </section>
        ))
      ) : (
        <p>No release notes found.</p>
      )}
    </main>
  );
}
