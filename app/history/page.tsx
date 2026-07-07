import type { Metadata } from "next";
import { timeline } from "@/lib/data";

export const metadata: Metadata = {
  title: "History & Timeline",
  description:
    "Why Minnesota? From the first Somali refugees in 1992 to a community thirty years rooted — jobs came first.",
};

export default function HistoryPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <h1>History &amp; Timeline</h1>
          <p>
            Why Minnesota? The historical record is clear: jobs came first.
            Word of steady work in a Marshall turkey plant spread through the
            diaspora in 1992, resettlement agencies with decades of experience
            did the rest, and a community put down roots.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap-narrow">
          <div className="timeline">
            {timeline.map((t) => (
              <div className="t-item reveal" key={t.year}>
                <div className="t-year">{t.year}</div>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
                <div className="source-line">
                  <a href={t.sourceUrl} target="_blank" rel="noopener noreferrer">
                    {t.source}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="callout reveal">
            <strong>The pattern to notice:</strong> employment, then
            institutions, then citizenship, then civic leadership — the same
            arc earlier immigrant communities to Minnesota followed, compressed
            into a single generation.
          </div>
        </div>
      </section>
    </>
  );
}
