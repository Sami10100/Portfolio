import type { ComponentPropsWithoutRef, ReactNode } from "react";

type DivProps = ComponentPropsWithoutRef<"div">;

export function Container({ className = "", ...props }: DivProps) {
  return <div className={`sb-container ${className}`} {...props} />;
}

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
};

export function Section({ className = "", children, ...props }: SectionProps) {
  return (
    <section className={className} {...props}>
      {children}
    </section>
  );
}

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "cyan" | "outline" | "dark";
};

export function ButtonLink({ className = "", variant = "cyan", ...props }: ButtonLinkProps) {
  const variantClass =
    variant === "cyan"
      ? "btn-cyan"
      : variant === "dark"
        ? "inline-flex items-center justify-center gap-2 rounded-[12px] bg-[#1A1B41] px-[26px] py-[15px] text-[14.5px] font-semibold text-white no-underline"
        : "inline-flex items-center justify-center gap-2 rounded-[12px] border border-[rgba(0,229,255,.4)] px-[22px] py-[12px] text-[14px] font-semibold text-[#00E5FF] no-underline";

  return <a className={`${variantClass} ${className}`} {...props} />;
}

export function Card({ className = "", ...props }: DivProps) {
  return <div className={`light-card ${className}`} {...props} />;
}
