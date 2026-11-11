import { useId } from "react";

export function LogoMark({ concept, onDark = false, className = "h-24 w-24" }) {
  const colors = {
    navy: onDark ? "#F7F3EA" : "#0B2A3C",
    teal: "#12807A",
    mint: "#5CC2B8",
    amber: "#F2A93B",
  };
  const clipId = useId().replaceAll(":", "");

  if (concept === "moment-pin") {
    return (
      <svg className={className} viewBox="0 0 100 110" role="img" aria-label="Moment Pin logo mark">
        <path d="M50 5C29 5 12 22 12 43c0 26 38 62 38 62s38-36 38-62C88 22 71 5 50 5Z" fill={colors.navy} />
        <circle cx="50" cy="42" r="23" fill="none" stroke={colors.mint} strokeWidth="3.5" />
        <circle cx="50" cy="42" r="16" fill="none" stroke={colors.teal} strokeWidth="3.5" />
        <path d="M50 42 66 26" fill="none" stroke={colors.amber} strokeLinecap="round" strokeWidth="5" />
        <circle cx="50" cy="42" r="7" fill={colors.amber} />
      </svg>
    );
  }

  if (concept === "contour-k") {
    return (
      <svg className={className} viewBox="0 0 100 100" role="img" aria-label="Contour K logo mark">
        <path d="M20 14v72" fill="none" stroke={colors.navy} strokeWidth="12" strokeLinecap="round" />
        <path d="m40 48 29-31M43 49l31-32M46 51l32-31" fill="none" stroke={onDark ? "#F7F3EA" : "#89999D"} strokeWidth="4" strokeLinecap="round" />
        <path d="M40 50 77 84" fill="none" stroke={colors.teal} strokeWidth="12" strokeLinecap="round" />
        <circle cx="40" cy="50" r="7" fill={colors.amber} />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 100 100" role="img" aria-label="Horizon Globe logo mark">
      <defs>
        <clipPath id={clipId}>
          <circle cx="50" cy="50" r="35" />
        </clipPath>
      </defs>
      <circle cx="50" cy="50" r="35" fill={colors.navy} />
      <g clipPath={`url(#${clipId})`} fill="none" stroke={colors.mint} strokeWidth="2.5">
        <ellipse cx="50" cy="50" rx="17" ry="35" />
        <path d="M50 15v70M13 35h74M13 65h74" />
      </g>
      <path d="M15 50h70" stroke={colors.navy} strokeWidth="5" />
      <path d="M33 63a17 17 0 0 1 34 0" fill={colors.amber} />
    </svg>
  );
}

export function LogoLockup({ concept, onDark = false }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${onDark ? "text-cream" : "text-ink"}`}>
      <LogoMark concept={concept} onDark={onDark} className="h-14 w-14 shrink-0 sm:h-16 sm:w-16" />
      <div>
        <p className="font-sans text-4xl font-semibold leading-none tracking-[-0.055em] sm:text-[2.65rem]">kairos</p>
        <p className={`mt-2 text-[0.58rem] font-semibold tracking-[0.28em] ${onDark ? "text-mint" : "text-teal"} sm:text-[0.65rem]`}>
          SPATIAL SOLUTIONS
        </p>
      </div>
    </div>
  );
}
