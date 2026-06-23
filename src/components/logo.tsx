type LogoProps = {
  className?: string;
  markClassName?: string;
  showText?: boolean;
  textClassName?: string;
  accent?: "current" | "cyan";
};

export function Logo({
  className = "",
  markClassName = "",
  showText = true,
  textClassName = "",
  accent = "current",
}: LogoProps) {
  const stroke = accent === "cyan" ? "#00E5FF" : "currentColor";

  return (
    <span className={`inline-flex items-center gap-[10px] text-inherit ${className}`}>
      <svg
        viewBox="0 0 48 52"
        width="44"
        height="48"
        aria-hidden="true"
        className={`block shrink-0 ${markClassName}`}
      >
        <path
          d="M35,8 L16,8 C11,8 7.5,11.5 7.5,16.5 C7.5,21.5 11,25 16,25 L30,25 C35,25 38.5,28.5 38.5,33.5 C38.5,38.5 35,42 30,42 L11,42"
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="7"
        />
        <circle cx="43" cy="9" r="5.5" fill="#FF6F59" />
        <circle cx="5" cy="45" r="5.5" fill="#00E5FF" />
      </svg>
      {showText ? (
        <span className={`font-display text-[21px] font-bold tracking-[-.02em] ${textClassName}`}>SitesBrand</span>
      ) : null}
    </span>
  );
}
