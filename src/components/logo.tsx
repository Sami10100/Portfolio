import Image from "next/image";

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
}: LogoProps) {
  const src = showText ? "/assets/sitesbrand-wordmark-transparent.webp" : "/assets/sitesbrand-icon-transparent.webp";
  const width = showText ? 181 : 44;
  const height = showText ? 48 : 54;

  return (
    <span className={`inline-flex items-center text-inherit ${className}`}>
      <Image
        src={src}
        alt="SitesBrand"
        width={width}
        height={height}
        preload
        className={`block h-auto shrink-0 object-contain ${showText ? "w-[181px]" : "w-11"} ${markClassName}`}
      />
    </span>
  );
}
