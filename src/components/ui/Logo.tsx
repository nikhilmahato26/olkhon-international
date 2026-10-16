import emblem from "../../assets/logo/olkhon-emblem.webp";

/**
 * Emblem from the supplied Olkhon logo plus a text wordmark.
 * The emblem sits on a white chip so the logo blue stays legible in dark mode.
 */
export function Logo({ tone = "default" }: { tone?: "default" | "navy" }) {
  const onNavy = tone === "navy";
  return (
    <span className="flex items-center gap-2.5 sm:gap-3">
      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-white p-1 ring-1 ring-line sm:size-12 sm:p-1.5">
        <img src={emblem} alt="" width={160} height={144} className="h-auto w-full" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-[13.5px] font-bold tracking-tight min-[400px]:text-[15px] sm:text-base ${onNavy ? "text-on-navy" : "text-ink-strong"}`}>
          OLKHON INTERNATIONAL
        </span>
        <span
          className={`mt-1.5 text-[9px] font-semibold tracking-[0.18em] min-[400px]:text-[10px] min-[400px]:tracking-[0.2em] ${onNavy ? "text-on-navy-muted" : "text-muted"}`}
        >
          CONSULTANTS PVT LTD
        </span>
      </span>
    </span>
  );
}
