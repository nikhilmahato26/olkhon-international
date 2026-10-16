import { ArrowRight, CalendarClock, Mail, Phone } from "lucide-react";
import { business } from "../../config/business";
import { nextOpenIntake } from "../../data/intakes";
import { ANCHORS } from "../../data/navigation";

/**
 * Slim bar above the navbar. Shows the soonest open Synergy intake (hidden
 * automatically once every deadline has passed) and, on desktop, contact details.
 */
export function TopBar() {
  const intake = nextOpenIntake();

  return (
    <div className="bg-navy text-on-navy">
      <div className="container-page flex min-h-10 items-center justify-between gap-6 py-2 text-[13px]">
        {intake ? (
          <a
            href={ANCHORS.synergy}
            className="group flex min-w-0 items-center gap-2 font-medium hover:text-white"
          >
            <CalendarClock className="size-4 shrink-0 text-accent" strokeWidth={2} aria-hidden="true" />
            <span className="truncate">
              Synergy University {intake.title}
              {intake.intakeLabel ? ` (${intake.intakeLabel})` : ""}: {intake.closingLabel}
            </span>
            <ArrowRight
              className="hidden size-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none sm:block"
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>
        ) : (
          <span className="text-on-navy-muted">{business.tagline}</span>
        )}

        <div className="hidden shrink-0 items-center gap-6 lg:flex">
          <a href={business.primaryPhone.uri} className="flex items-center gap-2 font-semibold hover:text-white">
            <Phone className="size-3.5 text-accent" strokeWidth={2} aria-hidden="true" />
            {business.primaryPhone.label}
          </a>
          <a href={business.additionalPhone.uri} className="flex items-center gap-2 text-on-navy-muted hover:text-white">
            <Phone className="size-3.5" strokeWidth={2} aria-hidden="true" />
            {business.additionalPhone.label}
          </a>
          <a href={`mailto:${business.email}`} className="hidden items-center gap-2 text-on-navy-muted hover:text-white xl:flex">
            <Mail className="size-3.5" strokeWidth={2} aria-hidden="true" />
            {business.email}
          </a>
        </div>
      </div>
    </div>
  );
}
