import type { Metadata } from "next";
import StatCard from "@/components/StatCard";
import { economyStats, trendTable, industries, economyContext } from "@/lib/data";

export const metadata: Metadata = {
  title: "Economy & Work",
  description:
    "Labor force participation, industries, entrepreneurship, and two decades of measurable upward mobility among Somali Minnesotans.",
};

export default function EconomyPage() {
  const maxVal = 70; // scale bars against a common ceiling
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <h1>Economy &amp; Work</h1>
          <p>
            Somali Minnesotans work at higher rates than the state average,
            concentrate in sectors facing critical shortages, and have posted
            two decades of measurable upward mobility. Here is what the public
            record shows.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="stat-grid">
            {economyStats.map((s) => (
              <StatCard key={s.label} stat={s} />
            ))}
          </div>
          <div className="callout reveal">
            <strong>What “$8 billion” means:</strong> this is an economic
            contribution estimate produced with IMPLAN, a standard
            economic-impact model — a measure of the activity Somali workers
            and businesses support, not a net fiscal balance sheet. We label it
            that way because accuracy is the point of this site.
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>{trendTable.title}</h2>
          <p className="section-note">
            {trendTable.note} ·{" "}
            <a href={trendTable.sourceUrl} target="_blank" rel="noopener noreferrer">
              {trendTable.source}
            </a>
          </p>
          <div className="trend reveal">
            {trendTable.rows.map((r) => (
              <div className="trend-row" key={r.indicator}>
                <div className="t-head">
                  <span className="t-name">{r.indicator}</span>
                  <span className="t-move">
                    <span className="then">
                      {r.then}
                      {r.unit}
                    </span>
                    <span className="arrow">→</span>
                    <span className="now">
                      {r.now}
                      {r.unit}
                    </span>
                  </span>
                </div>
                <div className="t-bars">
                  <div className="t-bar then">
                    <span style={{ width: `${(r.then / maxVal) * 100}%` }} />
                  </div>
                  <div className="t-bar now">
                    <span style={{ width: `${(r.now / maxVal) * 100}%` }} />
                  </div>
                </div>
                {r.note && <div className="t-note">{r.note}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <h2>Where Somali Minnesotans work</h2>
          <p>
            The top industries for Somali workers are{" "}
            {industries.join(", ").toLowerCase()} — several of them sectors
            where Minnesota faces acute shortages. Nearly a third of the
            state&apos;s workforce is over 55, and immigrants have driven
            roughly 60% of Minnesota&apos;s recent workforce growth, making the
            young Somali community (median age about 22) a core part of the
            state&apos;s replacement workforce.
          </p>
          <p>
            Entrepreneurship runs deep: from Karmel Mall — often described as
            America&apos;s first Somali mall — to commercial corridors in
            Willmar, St. Cloud, and Rochester, Somali-owned businesses in
            childcare, health care, transportation, restaurants, and retail
            anchor neighborhoods across the state, with women entrepreneurs
            especially prominent.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>The full picture</h2>
          <p className="section-note">
            A young, recently arrived community still faces real economic
            gaps. We show them because the trend lines — every one pointing up
            — are the story.
          </p>
          <div className="stat-grid">
            {economyContext.map((s) => (
              <StatCard key={s.label} stat={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
