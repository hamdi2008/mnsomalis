import Link from "next/link";
import StatCard from "@/components/StatCard";
import { headlineStats } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <span className="kicker">A public-data reference · Updated 2026</span>
          <h1>
            Who are <em>Somali Minnesotans</em>? Here are the facts.
          </h1>
          <p className="lede">
            Minnesota is home to the largest Somali community in the United
            States. This site assembles what the public record — the U.S.
            Census Bureau, Minnesota state agencies, and published research —
            actually says about it. Every number is cited. Check our work.
          </p>
        </div>
      </section>

      <section className="wrap">
        <div className="stat-grid">
          {headlineStats.map((s) => (
            <StatCard key={s.label} stat={s} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Explore the data</h2>
          <p className="section-note">
            Three chapters, built from primary sources. More coming.
          </p>
          <div className="explore-grid">
            <Link href="/population" className="explore-card reveal">
              <h3>Population &amp; Geography</h3>
              <p>
                How many Somali Minnesotans there are, where they live, and why
                the count depends on how you measure.
              </p>
              <span className="go">Read the numbers →</span>
            </Link>
            <Link href="/economy" className="explore-card reveal">
              <h3>Economy &amp; Work</h3>
              <p>
                Labor force participation, industries, entrepreneurship, and
                two decades of upward mobility.
              </p>
              <span className="go">Read the numbers →</span>
            </Link>
            <Link href="/history" className="explore-card reveal">
              <h3>History &amp; Timeline</h3>
              <p>
                Why Minnesota? From the first arrivals in 1992 to a community
                thirty years rooted.
              </p>
              <span className="go">Read the story →</span>
            </Link>
            <Link href="/methodology" className="explore-card reveal">
              <h3>Methodology &amp; Sources</h3>
              <p>
                Where every number comes from, how measures differ, and how to
                suggest a correction.
              </p>
              <span className="go">Check our work →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
