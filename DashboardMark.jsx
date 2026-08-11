// A small "dashboard" panel rendered in the hero — an SVG bar chart with a
// sparkline overlay, echoing the Power BI / Excel dashboards in the resume.
// This is the page's signature visual element.
export default function DashboardMark() {
  const bars = [38, 62, 46, 80, 58, 94, 70];

  return (
    <div className="relative w-full max-w-sm mx-auto lg:mx-0">
      <div className="rounded-2xl border border-line bg-surface shadow-xl shadow-ink/5 p-6">
        <div className="flex items-center justify-between mb-5">
          <span className="font-mono text-[11px] text-inkmuted">
            -- weekly_sales.sql
          </span>
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-line" />
            <span className="w-2 h-2 rounded-full bg-line" />
            <span className="w-2 h-2 rounded-full bg-teal" />
          </div>
        </div>

        <svg viewBox="0 0 280 140" className="w-full h-auto" role="img" aria-label="Sample bar chart representing a sales dashboard">
          {/* gridlines */}
          {[0, 1, 2, 3].map((i) => (
            <line
              key={i}
              x1="0"
              x2="280"
              y1={20 + i * 30}
              y2={20 + i * 30}
              stroke="#E3E4DE"
              strokeWidth="1"
            />
          ))}

          {/* bars */}
          {bars.map((h, i) => {
            const barWidth = 24;
            const gap = 12;
            const x = i * (barWidth + gap) + 10;
            const barHeight = h;
            const y = 130 - barHeight;
            return (
              <rect
                key={i}
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                rx="4"
                fill={i === 5 ? "#0F766E" : "#CBEAE6"}
                className="origin-bottom animate-[growbar_1.1s_ease-out_forwards]"
                style={{ animationDelay: `${i * 90}ms`, transformBox: "fill-box" }}
              />
            );
          })}

          {/* sparkline */}
          <polyline
            points="10,110 44,90 78,100 112,60 146,85 180,40 214,58 248,30"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
        </svg>

        <div className="flex items-center justify-between mt-5 pt-4 border-t border-line">
          <div>
            <p className="font-mono text-[10px] text-inkmuted uppercase tracking-wide">
              EDA status
            </p>
            <p className="font-display text-sm font-semibold text-ink">
              Cleaned &amp; visualized
            </p>
          </div>
          <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-teal-soft text-teal">
            Power BI
          </span>
        </div>
      </div>

      {/* floating tag */}
      <div className="hidden md:flex absolute -bottom-5 -left-5 items-center gap-2 rounded-xl border border-line bg-surface px-3.5 py-2.5 shadow-lg shadow-ink/5">
        <span className="w-2 h-2 rounded-full bg-teal" />
        <span className="font-mono text-xs text-ink">SELECT * FROM insights</span>
      </div>

      <style>{`
        @keyframes growbar {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}
