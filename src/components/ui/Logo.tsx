import emblem from "../../assets/logo/olkhon-emblem.png";

/**
 * Emblem from the supplied Olkhon logo plus a text wordmark.
 * The emblem sits on a white chip so the logo blue stays legible in dark mode.
 */
export function Logo({ tone = "default" }: { tone?: "default" | "navy" }) {
  const onNavy = tone === "navy";
  return (
    <span className="flex items-center gap-3">
      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 ring-1 ring-line">
        <img src={emblem} alt="" width={307} height={277} className="h-auto w-full" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-[15px] font-bold tracking-tight sm:text-base ${onNavy ? "text-on-navy" : "text-ink-strong"}`}>
          OLKHON INTERNATIONAL
        </span>
        <span
          className={`mt-1.5 text-[10px] font-semibold tracking-[0.2em] ${onNavy ? "text-on-navy-muted" : "text-muted"}`}
        >
          CONSULTANTS PVT LTD
        </span>
      </span>
    </span>
  );
}
