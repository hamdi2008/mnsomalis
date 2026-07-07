import type { Stat } from "@/lib/data";

export default function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="stat-card reveal">
      <div className="value">{stat.value}</div>
      <div className="label">{stat.label}</div>
      {stat.detail && <div className="detail">{stat.detail}</div>}
      <div className="source-line">
        <a href={stat.sourceUrl} target="_blank" rel="noopener noreferrer">
          {stat.source}
        </a>{" "}
        · <span className="yr">{stat.year}</span>
      </div>
    </div>
  );
}
