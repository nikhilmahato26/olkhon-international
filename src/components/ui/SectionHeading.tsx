import type { ReactNode } from "react";

type Props = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "default" | "navy";
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ id, eyebrow, title, description, tone = "default", align = "left", className = "" }: Props) {
  const onNavy = tone === "navy";
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && (
        <p
          className={`mb-4 text-xs font-semibold uppercase tracking-[0.16em] ${
            onNavy ? "text-accent" : "text-accent-ink"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`text-3xl font-semibold leading-[1.1] tracking-tight md:text-4xl lg:text-[2.75rem] ${
          onNavy ? "text-on-navy" : ""
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-[65ch] text-base leading-relaxed md:text-lg ${
            align === "center" ? "mx-auto" : ""
          } ${onNavy ? "text-on-navy-muted" : "text-muted"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
