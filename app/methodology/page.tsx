import type { Metadata } from "next";
import { sources } from "@/lib/data";

export const metadata: Metadata = {
  title: "Methodology & Sources",
  description:
    "Where every number on this site comes from, how census measures differ, and how to suggest a correction.",
};

export default function MethodologyPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <h1>Methodology &amp; Sources</h1>
          <p>Check our work. That&apos;s the whole idea.</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap prose">
          <h2>What this site is</h2>
          <p>
            MN Somalis is an independent reference on Minnesota&apos;s Somali
            community, assembled entirely from public data: the U.S. Census
            Bureau, Minnesota state agencies and research organizations, the
            Minnesota Historical Society, and peer-cited academic research.
            It exists because these facts were scattered across government
            tables, PDFs, and reports — and deserved one well-organized,
            citable home. It publishes facts, not commentary.
          </p>

          <h2 style={{ marginTop: "2.5rem" }}>How we handle numbers</h2>
          <p>
            Every statistic on this site carries a visible source and year.
            Where official measures disagree — most notably total population,
            where census methods yield estimates from roughly 61,000 to
            108,500 — we show the range and label each measure rather than
            picking a convenient number. Economic figures based on models
            (such as IMPLAN economic-impact estimates) are labeled as
            estimates of economic contribution, not net fiscal analyses.
          </p>
          <p>
            Population data updates annually when the Census Bureau releases
            new American Community Survey estimates, typically in September
            (1-year) and December (5-year).
          </p>

          <h2 style={{ marginTop: "2.5rem" }}>Why numbers differ</h2>
          <p>
            The American Community Survey is a sample survey, not a full
            count, so every ACS figure is an estimate with a margin of error.
            Different ACS products also measure different things: 1-year
            estimates are more current but less precise; 5-year estimates are
            more precise but lag behind. Identity questions add another layer
            — counts based on ancestry, race, or place of birth each capture a
            different slice of the community, and many respondents skip the
            ancestry question entirely. This is why credible population
            estimates for Somali Minnesotans legitimately range from about
            61,000 to 108,500, and why this site always tells you which
            measure a number comes from.
          </p>

          <h2 style={{ marginTop: "2.5rem" }}>How sources are selected</h2>
          <p>
            We favor primary and institutional sources in this order:
            official government data (Census Bureau, state agencies),
            established research organizations (Minnesota Compass, Minnesota
            Chamber Foundation), the Minnesota Historical Society, and
            peer-cited academic research. News outlets are cited only when
            they report or analyze underlying official data. Advocacy sources
            — on any side — are not used.
          </p>

          <h2 style={{ marginTop: "2.5rem" }}>How this site was built</h2>
          <p>
            AI tools assisted with gathering, organizing, and drafting the
            content on this site. Every statistic comes from a publicly
            available source, is linked to that source, and every effort has
            been made to represent those sources accurately. See the{" "}
            <a href="/about">About</a> page for more on the project.
          </p>

          <h2 style={{ marginTop: "2.5rem" }}>Corrections</h2>
          <p>
            Found an error, a stale figure, or a better primary source? Email{" "}
            <a href="mailto:hello@mnsomalis.com">hello@mnsomalis.com</a>. If a
            correction checks out, we make it and note it.
          </p>

          <h2 style={{ marginTop: "2.5rem" }}>Sources</h2>
          <ul className="source-list">
            {sources.map((s) => (
              <li key={s.url}>
                {s.name}
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
