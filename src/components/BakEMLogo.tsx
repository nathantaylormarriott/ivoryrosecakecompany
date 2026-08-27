export function BakEMLogo({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "onDark";
}) {
  const onDark = variant === "onDark";

  return (
    <span
      className={`relative inline-flex items-baseline gap-1.5 select-none ${onDark ? "text-milk" : "text-ink"} ${className}`}
      aria-label="BakEM"
    >
      <span className="font-logo-script text-[2.35rem] md:text-[2.65rem] leading-[0.72]">
        Bak
      </span>
      <span
        className={`font-logo-serif text-[1.02rem] md:text-[1.12rem] font-bold uppercase tracking-[0.08em] leading-none translate-y-[0.05em] ${
          onDark ? "text-milk/90" : "text-ink"
        }`}
      >
        EM
      </span>
    </span>
  );
}

export function BakEMMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <circle cx="16" cy="16" r="15" fill="var(--sage)" />
      <path
        d="M8 20 Q16 8 24 20"
        stroke="var(--cream)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="12" cy="18" r="1.5" fill="var(--cream)" />
      <circle cx="16" cy="16" r="1.5" fill="var(--cream)" />
      <circle cx="20" cy="18" r="1.5" fill="var(--cream)" />
    </svg>
  );
}
