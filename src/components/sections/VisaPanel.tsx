import { Check, Info } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ButtonLink } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

type Props = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  services: string[];
  ctaLabel: string;
  whatsappHref: string;
  note: string;
  delay?: number;
};

/** Shared layout for the business and tourist visa panels on the navy band. */
export function VisaPanel({ id, icon: Icon, title, description, services, ctaLabel, whatsappHref, note, delay = 0 }: Props) {
  return (
    <Reveal delay={delay} className="h-full">
      <article
        id={id}
        aria-labelledby={`${id}-title`}
        className="flex h-full flex-col rounded-2xl border border-navy-line bg-navy-raised p-6 md:p-8"
      >
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent text-navy">
          <Icon className="size-[22px]" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h3 id={`${id}-title`} className="mt-5 text-2xl font-semibold tracking-tight text-on-navy">
          {title}
        </h3>
        <p className="mt-3 leading-relaxed text-on-navy-muted">{description}</p>
        <ul className="mt-6 flex flex-col gap-3">
          {services.map((s) => (
            <li key={s} className="flex items-start gap-3 text-[15.5px] text-on-navy">
              <Check className="mt-0.5 size-[18px] shrink-0 text-accent" strokeWidth={2.5} aria-hidden="true" />
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-8">
          <ButtonLink href={whatsappHref} external variant="onNavySolid" className="w-full sm:w-auto">
            <WhatsAppIcon className="size-[18px] text-whatsapp" />
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
