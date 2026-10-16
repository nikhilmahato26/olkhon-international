import { ArrowRight, CalendarClock } from "lucide-react";
import { useEnquiry } from "../../context/EnquiryContext";
import { ANCHORS } from "../../data/navigation";
import type { Program } from "../../data/programs";
import { ButtonLink } from "./Button";

export function ProgramCard({ program, wide = false }: { program: Program; wide?: boolean }) {
  const { prefillAdmission } = useEnquiry();
  const Icon = program.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface-raised shadow-soft transition-shadow duration-300 hover:shadow-lift">
      <div className={`overflow-hidden ${wide ? "aspect-video" : "aspect-video md:aspect-4/3"}`}>
        <img
          src={program.image}
          alt={program.imageAlt}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
      <div className="relative flex flex-1 flex-col px-6 pb-6 md:px-7 md:pb-7">
        <span className="-mt-7 inline-flex size-14 items-center justify-center rounded-full border-4 border-surface-raised bg-brand text-white">
          <Icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-xl font-semibold tracking-tight">{program.title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{program.description}</p>
        {program.current && (
          <p className="mt-4 flex items-start gap-2 text-sm font-medium text-accent-ink">
            <CalendarClock className="mt-0.5 size-4 shrink-0" strokeWidth={2} aria-hidden="true" />
            {program.current}
          </p>
        )}
        <div className="mt-auto pt-6">
          <ButtonLink
            href={ANCHORS.apply}
            variant="secondary"
            size="sm"
            onClick={() => prefillAdmission(program.prefill)}
            aria-label={`Enquire now about ${program.title}`}
          >
            Enquire now
            <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
