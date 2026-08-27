import logoRose from "@/assets/logo-rose.png";

function RoseMark({
  className = "",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <img
      src={logoRose}
      alt=""
      aria-hidden
      className={`object-contain ${onDark ? "brightness-0 invert" : ""} ${className}`}
    />
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
        <RoseMark
          onDark={onDark}
          className={compact ? "h-8 w-10" : "h-10 w-12 md:h-11 md:w-14"}
        />
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

export function IvoryRoseMark({
  className = "",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return <RoseMark className={className} onDark={onDark} />;
}
