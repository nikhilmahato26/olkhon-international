import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "onNavy" | "onNavySolid" | "whatsapp";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold text-center leading-tight sm:whitespace-nowrap " +
  "transition-[background-color,border-color,color,transform,box-shadow] duration-200 ease-out-soft " +
  "hover:-translate-y-px active:translate-y-0 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 " +
  "motion-reduce:transform-none";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white shadow-soft hover:bg-brand-hover",
  secondary: "border border-line-strong bg-surface-raised text-ink-strong hover:border-brand hover:text-brand-ink",
  onNavy: "border border-white/30 text-on-navy hover:border-white/70 hover:bg-white/10",
  onNavySolid: "bg-white text-navy hover:bg-brand-soft",
  whatsapp: "bg-whatsapp text-white shadow-soft hover:brightness-110",
};

const sizes: Record<Size, string> = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-12 px-6 py-3 text-[15px]",
  lg: "min-h-14 px-7 py-3.5 text-base",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className = ""): string {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

type CommonProps = { variant?: Variant; size?: Size; children: ReactNode; className?: string };

export function ButtonLink({
  variant,
  size,
  className,
  external,
  children,
  ...rest
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { external?: boolean }) {
  return (
    <a
      className={buttonClasses(variant, size, className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}

export function Button({
  variant,
  size,
  className,
  children,
  type = "button",
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={buttonClasses(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}
