import type { Metadata } from "next";
import Link from "next/link";
import { LAST_UPDATED } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "What MN Somalis is, why it exists, and how it was built. An independent public information project.",
};

export default function AboutPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <h1>About this site</h1>
          <p>An independent public information project.</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap prose">
          <h2>What MN Somalis is</h2>
          <p>
            MN Somalis is an independent public reference about
            Minnesota&apos;s Somali community. Its goal is simple: to make
            reliable, publicly available information about the community
            easier to find, understand, and verify.
          </p>
          <p>
            This website does not create original datasets. It organizes and
            summarizes information already published by government agencies,
            academic institutions, and other reliable public sources — the
            U.S. Census Bureau, the Minnesota State Demographic Center,
            Minnesota Compass, the Minnesota Chamber Foundation, the Minnesota
            Historical Society, and peer-cited academic research — and links
            to the original source for every number.
          </p>

          <h2 style={{ marginTop: "2.5rem" }}>Why it exists</h2>
          <p>
            Public conversations about Minnesota&apos;s Somali community often
            rely on incomplete or inaccurate information. Yet the facts are
            all on the public record — scattered across government tables,
            PDFs, and research reports. There was no single place where anyone
            could easily find them, so this site brings them together. It is
            not advocacy and it is not commentary. It presents facts, links to
            sources, and lets readers draw their own conclusions.
          </p>

          <h2 style={{ marginTop: "2.5rem" }}>How it was built</h2>
          <p>
            AI tools assisted with gathering, organizing, and drafting content
            for this site. Every statistic, however, comes from a publicly
            available source, is linked to that source, and every effort has
            been made to represent those sources accurately. Details on how
            numbers are handled — including why different official measures
            give different answers — are on the{" "}
            <Link href="/methodology">Methodology &amp; Sources</Link> page.
          </p>

          <h2 style={{ marginTop: "2.5rem" }}>About the maintainer</h2>
          <p>MN Somalis is created and maintained by Hamdi Hassan.</p>
          <p>
            I built this project to make reliable, publicly available
            information about Minnesota&apos;s Somali community easier to
            find and understand. The information already existed across
            government reports, academic research, and public datasets—it
            simply wasn&apos;t available in one accessible place.
          </p>
          <p>
            My role is to organize that information, cite every source, and
            maintain the project over time. I welcome corrections and
            feedback to help keep the site accurate and useful.
          </p>

          <h2 style={{ marginTop: "2.5rem" }}>Corrections &amp; Feedback</h2>
          <p>
            Accuracy is the foundation of this project. If you notice an
            error, outdated information, missing context, or would like to
            suggest a reliable public source or topic, please email{" "}
            <a href="mailto:hello@mnsomalis.com">hello@mnsomalis.com</a>.
          </p>
          <p>
            Every message is reviewed carefully. Verified corrections are
            made promptly, and thoughtful suggestions help improve the
            project over time.
          </p>

          <p className="m-note" style={{ marginTop: "2.5rem" }}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>
    </>
  );
}
