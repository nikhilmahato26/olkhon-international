import { ArrowRight, CalendarClock, Check, Expand, FileBadge, MapPin } from "lucide-react";
import { useState } from "react";
import { synergyAuthorization } from "../../config/business";
import { useEnquiry } from "../../context/EnquiryContext";
import { INTAKES, isIntakeOpen, type Intake } from "../../data/intakes";
import { ANCHORS } from "../../data/navigation";
import { messages, whatsappUrl } from "../../utils/whatsapp";
import { ButtonLink } from "../ui/Button";
import { PosterLightbox } from "../ui/PosterLightbox";
import { Reveal } from "../ui/Reveal";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

function IntakeCard({ intake, onViewPoster }: { intake: Intake; onViewPoster: (i: Intake) => void }) {
  const { prefillAdmission } = useEnquiry();
  const open = isIntakeOpen(intake);

  return (
    <article className="grid gap-6 rounded-2xl border border-line bg-surface-raised p-5 shadow-soft sm:grid-cols-[168px_1fr] md:p-6">
      <button
        type="button"
        onClick={() => onViewPoster(intake)}
        className="group mx-auto flex w-40 flex-col items-center gap-2.5 rounded-xl sm:mx-0 sm:w-full"
        aria-label={`View full poster: ${intake.title}`}
      >
        <span className="block w-full overflow-hidden rounded-xl ring-1 ring-line">
          <img
            src={intake.poster}
            alt={intake.posterAlt}
            width={720}
            height={1280}
            loading="lazy"
            decoding="async"
            className="aspect-9/16 w-full object-cover transition-transform duration-500 ease-out-soft group-hover:scale-[1.03] motion-reduce:transition-none"
          />
        </span>
        <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-ink group-hover:underline">
          <Expand className="size-3.5" strokeWidth={2} aria-hidden="true" />
          View full poster
        </span>
      </button>

      <div className="flex flex-col">
        <p
          className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-[13px] font-semibold ${
            open ? "bg-accent-soft text-accent-ink" : "bg-surface-alt text-muted"
          }`}
        >
          <CalendarClock className="size-4" strokeWidth={2} aria-hidden="true" />
          {open ? intake.closingLabel : "This intake has closed. Ask us about upcoming intakes."}
        </p>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight">{intake.title}</h3>
        <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] text-muted">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4" strokeWidth={1.75} aria-hidden="true" />
            Synergy University, {intake.location}
          </span>
          {intake.intakeLabel && <span className="font-medium text-ink">{intake.intakeLabel}</span>}
        </p>
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {intake.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-[15px] text-ink">
              <Check className="mt-0.5 size-4 shrink-0 text-brand-ink" strokeWidth={2.5} aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          <ButtonLink
            href={ANCHORS.apply}
            size="sm"
            variant={open ? "primary" : "secondary"}
            onClick={() => prefillAdmission(intake.prefill)}
            aria-label={`Enquire about the ${intake.title} intake`}
          >
            Enquire about this intake
            <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}

function AuthorizationProof() {
  if (synergyAuthorization.proofImage) {
    return (
      <figure className="mt-8 overflow-hidden rounded-2xl border border-line bg-surface-raised">
        <img src={synergyAuthorization.proofImage} alt={synergyAuthorization.proofCaption} className="w-full" />
        {synergyAuthorization.proofCaption && (
          <figcaption className="px-5 py-4 text-sm text-muted">{synergyAuthorization.proofCaption}</figcaption>
        )}
      </figure>
    );
  }
  return (
    <div className="mt-8 flex gap-4 rounded-2xl border border-line bg-surface-raised p-5">
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-ink">
        <FileBadge className="size-5" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <div>
        <p className="font-semibold text-ink-strong">Authorization documentation</p>
        <p className="mt-1 text-[15px] leading-relaxed text-muted">
          You can ask our team for a copy of our Synergy University authorization documentation before you proceed.
        </p>
        <a
          href={whatsappUrl(messages.synergyAuthorization())}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex min-h-11 items-center gap-1.5 text-[15px] font-semibold text-brand-ink underline-offset-4 hover:underline"
        >
          Request a copy on WhatsApp
          <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export function SynergyUniversity() {
  const { prefillAdmission } = useEnquiry();
  const [poster, setPoster] = useState<Intake | null>(null);

  return (
    <section id="synergy-university" aria-labelledby="synergy-title" className="section-pad bg-surface-alt">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-accent-ink uppercase">Featured university</p>
          <h2
            id="synergy-title"
            className="text-3xl leading-[1.1] font-semibold tracking-tight md:text-4xl lg:text-[2.75rem]"
          >
            Explore admission opportunities at Synergy University
          </h2>
          <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-muted md:text-lg">
            {synergyAuthorization.statement} Contact our team to enquire about available programs, admission
            requirements, application documentation, and the next steps.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <ButtonLink
              href={ANCHORS.apply}
              onClick={() => prefillAdmission({ university: "Synergy University" })}
            >
              Enquire about Synergy University
            </ButtonLink>
            <ButtonLink href={whatsappUrl(messages.synergy())} external variant="secondary">
              <WhatsAppIcon className="size-4.5 text-whatsapp" />
              Ask on WhatsApp
            </ButtonLink>
          </div>
          <AuthorizationProof />
          <p className="mt-6 text-sm leading-relaxed text-muted">
            Synergy University is an independent institution. This website is operated by Olkhon International
            Consultants Pvt Ltd. Admission decisions are made by the university.
          </p>
        </Reveal>

        <div className="flex flex-col gap-6 lg:col-span-7">
          {INTAKES.map((intake, i) => (
            <Reveal key={intake.id} delay={i * 0.08}>
              <IntakeCard intake={intake} onViewPoster={setPoster} />
            </Reveal>
          ))}
          <p className="text-sm leading-relaxed text-muted">
            Intake details are taken from Synergy University's current admission campaign. Please confirm availability,
            fees and entry requirements with our team before you apply.
          </p>
        </div>
      </div>

      <PosterLightbox src={poster?.poster ?? null} alt={poster?.posterAlt ?? ""} onClose={() => setPoster(null)} />
    </section>
  );
}
