/** Radial progress ring drawn with the Design System gradients. */
export function RadialProgress({
  value,
  label,
  caption,
  variant = "violet",
  size = 132,
}: {
  value: number;
  label: string;
  caption?: string;
  variant?: "violet" | "peach";
  size?: number;
}) {
  const stroke = 10;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const id = `grad-${variant}-${label.replace(/\W/g, "")}`;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
              {variant === "violet" ? (
                <>
                  <stop offset="0%" stopColor="var(--primary)" />
                  <stop offset="100%" stopColor="var(--magenta)" />
                </>
              ) : (
                <>
                  <stop offset="0%" stopColor="var(--peach)" />
                  <stop offset="100%" stopColor="var(--amber)" />
                </>
              )}
            </linearGradient>
          </defs>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="oklch(1 0 0 / 0.08)"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={`url(#${id})`}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={c - (c * value) / 100}
            style={{ transition: "stroke-dashoffset 1.2s var(--ease-smooth)" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold">{value}%</span>
          {caption ? (
            <span className="text-[11px] text-ink-soft">{caption}</span>
          ) : null}
        </div>
      </div>
      <span className="text-sm font-medium text-ink-soft">{label}</span>
    </div>
  );
}
