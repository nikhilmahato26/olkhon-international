import { ArrowUpRight, Check, Info } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { VisaPackage } from "../../data/visaServices";
import { formatINR } from "../../utils/format";
import { messages, whatsappUrl } from "../../utils/whatsapp";
import { ButtonLink } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

type Props = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  services: string[];
  packagesTitle: string;
  packages: VisaPackage[];
  ctaLabel: string;
  whatsappHref: string;
  note: string;
  delay?: number;
};

function PackageRow({ pkg }: { pkg: VisaPackage }) {
  const price = formatINR(pkg.priceInr);
  return (
    <li className="rounded-xl border border-white/15 bg-white/4 p-4 md:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="min-w-0">
          <p className="font-semibold text-on-navy">{pkg.title}</p>
          {pkg.details.length > 0 && (
            <ul className="mt-2 flex flex-col gap-1.5">
              {pkg.details.map((d) => (
                <li key={d} className="flex items-center gap-2 text-sm text-on-navy-muted">
                  <Check className="size-3.5 shrink-0 text-accent" strokeWidth={2.5} aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          )}
        </div>
        <p className="shrink-0 sm:text-right">
          <span className="block text-xs text-on-navy-muted">Service package</span>
          <span className="text-2xl font-semibold tracking-tight text-on-navy tabular-nums">{price}</span>
        </p>
      </div>
      <a
        href={whatsappUrl(messages.visaPackage(pkg.title, price))}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Enquire about the ${pkg.title} package on WhatsApp (opens in a new tab)`}
        className="mt-2 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-accent underline-offset-4 hover:underline"
      >
        Enquire about this package
        <ArrowUpRight className="size-4" strokeWidth={2} aria-hidden="true" />
      </a>
    </li>
  );
}

/** Shared layout for the business and tourist visa panels on the navy band. */
export function VisaPanel({
  id,
  icon: Icon,
  title,
  description,
  services,
  packagesTitle,
  packages,
  ctaLabel,
  whatsappHref,
  note,
  delay = 0,
}: Props) {
  return (
    <Reveal delay={delay} className="h-full">
      <article
        id={id}
        aria-labelledby={`${id}-title`}
        className="flex h-full flex-col rounded-2xl border border-navy-line bg-navy-raised p-6 md:p-8"
      >
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent text-navy">
          <Icon className="size-5.5" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h3 id={`${id}-title`} className="mt-5 text-2xl font-semibold tracking-tight text-on-navy">
          {title}
        </h3>
        <p className="mt-3 leading-relaxed text-on-navy-muted">{description}</p>
        <ul className="mt-6 flex flex-col gap-3">
          {services.map((s) => (
            <li key={s} className="flex items-start gap-3 text-[15.5px] text-on-navy">
              <Check className="mt-0.5 size-4.5 shrink-0 text-accent" strokeWidth={2.5} aria-hidden="true" />
              {s}
            </li>
          ))}
        </ul>

        <h4 className="mt-8 font-semibold text-on-navy">{packagesTitle}</h4>
        <ul className="mt-4 flex flex-col gap-3">
          {packages.map((pkg) => (
            <PackageRow key={pkg.id} pkg={pkg} />
          ))}
        </ul>

        <div className="mt-auto pt-8">
          <ButtonLink href={whatsappHref} external variant="onNavySolid" className="w-full sm:w-auto">
            <WhatsAppIcon className="size-4.5 text-whatsapp" />
            {ctaLabel}
          </ButtonLink>
          <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-on-navy-muted">
            <Info className="mt-0.5 size-4 shrink-0" strokeWidth={2} aria-hidden="true" />
            {note}
          </p>
        </div>
      </article>
    </Reveal>
  );
}
