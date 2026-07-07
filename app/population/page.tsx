import type { Metadata } from "next";
import StatCard from "@/components/StatCard";
import {
  populationMeasures,
  populationStats,
  citizenshipTrend,
  countyData,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Population & Geography",
  description:
    "How many Somali Minnesotans there are, where they live, and why estimates range from 61,000 to 108,000 depending on the census measure.",
};

export default function PopulationPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <h1>Population &amp; Geography</h1>
          <p>
            Minnesota is home to the largest Somali community in the United
            States — roughly 40% of all Somali Americans. Exactly how large
            depends on which official measure you use, so we show all of them.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <h2>How many Somali Minnesotans are there?</h2>
          <p className="section-note">
            Three official measures, three answers. The Minnesota State
            Demographer recommends the broadest measure — “Somali alone or in
            any combination” — because many respondents skip the census
            ancestry question.
          </p>
          <div className="reveal">
            {populationMeasures.map((m) => (
              <div className="measure" key={m.measure}>
                <div className="measure-top">
                  <span className="m-name">{m.measure}</span>
                  <span className="m-value">{m.value}</span>
                </div>
                <div className="measure-bar">
                  <span style={{ width: `${m.pct}%` }} />
                </div>
                <p className="m-note">
                  {m.note}{" "}
                  <a href={m.sourceUrl} target="_blank" rel="noopener noreferrer">
                    {m.source}, {m.year}
                  </a>
                </p>
              </div>
            ))}
          </div>
          <div className="callout reveal">
            <strong>Honest note on precision:</strong> analysts caution that
            all of these estimates could be off by 10,000–20,000 in either
            direction — survey sampling and self-identification make an exact
            count unknowable. What every source agrees on: Minnesota&apos;s
            Somali community is the nation&apos;s largest.
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>The picture in brief</h2>
          <div className="stat-grid">
            {populationStats.map((s) => (
              <StatCard key={s.label} stat={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>{citizenshipTrend.title}</h2>
          <p className="section-note">{citizenshipTrend.note}</p>
          <div className="reveal">
            {citizenshipTrend.points.map((p) => (
              <div className="measure" key={p.year}>
                <div className="measure-top">
                  <span className="m-name">{p.year}</span>
                  <span className="m-value">{p.label}</span>
                </div>
                <div className="measure-bar">
                  <span style={{ width: `${p.value}%` }} />
                </div>
              </div>
            ))}
            <p className="m-note" style={{ marginTop: "0.8rem" }}>
              In two decades the community went from three-quarters non-citizens
              to 91% citizens — through naturalization and a generation born
              here. Nearly 58% of Somali Minnesotans today were born in the
              United States.{" "}
              <a
                href={citizenshipTrend.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {citizenshipTrend.source}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <h2>Where they live</h2>
          <p>
            About 77% of Somali Minnesotans live in the Twin Cities metro area,
            anchored by Minneapolis&apos;s Cedar-Riverside neighborhood — long
            the symbolic heart of Somali America. But the community reaches
            across Greater Minnesota: St. Cloud, Rochester, Willmar, Marshall,
            and Faribault all have established Somali communities, several of
            them dating to the meatpacking jobs that first drew Somali workers
            to the state in the 1990s.
          </p>
          <div className="stat-grid" style={{ marginTop: "1.5rem" }}>
            {countyData.map((c) => (
              <div className="stat-card reveal" key={c.name}>
                <div className="value" style={{ fontSize: "2rem" }}>
                  {c.value}
                </div>
                <div className="label">{c.name}</div>
                <div className="source-line">
                  <a
                    href="https://www.neilsberg.com/insights/lists/somali-population-in-minnesota-by-county/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    U.S. Census Bureau ACS 5-Year
                  </a>{" "}
                  · <span className="yr">2019–23</span>
                </div>
              </div>
            ))}
          </div>
          <p className="m-note">
            County figures use the narrower ACS 5-year measure and understate
            totals for the same reason the statewide 5-year figure does.
          </p>
        </div>
      </section>
    </>
  );
}
