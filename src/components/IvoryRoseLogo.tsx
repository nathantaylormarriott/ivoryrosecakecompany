function RoseMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M32 8C28 14 20 16 18 22C16 28 20 34 24 36C20 38 16 44 18 50C20 56 28 58 32 56C36 58 44 56 46 50C48 44 44 38 40 36C44 34 48 28 46 22C44 16 36 14 32 8Z"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinejoin="round"
      />
      <path
        d="M32 18C30 22 26 24 25 28C24 32 27 35 30 36C27 37 24 41 25 45C26 49 30 51 32 50C34 51 38 49 39 45C40 41 37 37 34 36C37 35 40 32 39 28C38 24 34 22 32 18Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M32 26C31 28 29 29 28.5 31C28 33 29.5 34.5 31 35C29.5 35.5 28 37 28.5 39C29 41 31 42 32 41.5C33 42 35 41 35.5 39C36 37 34.5 35.5 33 35C34.5 34.5 36 33 35.5 31C35 29 33 28 32 26Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IvoryRoseLogo({
  className = "",
  variant = "default",
  showMark = true,
}: {
  className?: string;
  variant?: "default" | "onDark" | "compact";
  showMark?: boolean;
}) {
  const onDark = variant === "onDark";
  const compact = variant === "compact";

  return (
    <span
      className={`inline-flex flex-col items-center select-none ${onDark ? "text-milk" : "text-ink"} ${className}`}
      aria-label="Ivory Rose Cake Company"
    >
      {showMark && (
        <RoseMark className={compact ? "h-7 w-7" : "h-9 w-9 md:h-10 md:w-10"} />
      )}
      <span
        className={`font-logo-serif font-semibold uppercase leading-none tracking-[0.22em] ${
          compact ? "mt-1 text-[0.55rem]" : "mt-2 text-[0.62rem] md:text-[0.68rem]"
        }`}
      >
        Ivory Rose
      </span>
      <span
        className={`font-logo-serif font-semibold uppercase leading-none tracking-[0.28em] ${
          compact ? "mt-0.5 text-[0.48rem]" : "mt-1 text-[0.54rem] md:text-[0.58rem]"
        } ${onDark ? "text-milk/85" : "text-ink/80"}`}
      >
        Cake Company
      </span>
    </span>
  );
}

export function IvoryRoseMark({ className = "" }: { className?: string }) {
  return <RoseMark className={className} />;
}
