import { ArrowRight, Info, ShieldAlert } from "lucide-react";
import { useEnquiry } from "../../context/EnquiryContext";
import { ANCHORS } from "../../data/navigation";
import { IMMIGRATION_SERVICES, LEGAL_BOUNDARIES, type ImmigrationService } from "../../data/visaServices";
import { Accordion, type AccordionItem } from "../ui/Accordion";
import { ButtonLink } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

function ServiceDetail({ service }: { service: ImmigrationService }) {
  const { prefillVisa } = useEnquiry();
  return (
    <div>
      <p className="leading-relaxed text-on-navy-muted">{service.description}</p>
      {service.note && (
        <p className="mt-3 flex items-start gap-2 rounded-xl bg-white/5 p-3 text-sm leading-relaxed text-on-navy">
          <Info className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={2} aria-hidden="true" />
          {service.note}
        </p>
      )}
      <a
        href={ANCHORS.visaEnquiry}
        onClick={() => prefillVisa(service.formService)}
        className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-[15px] font-semibold text-accent underline-offset-4 hover:underline"
      >
        Ask about this service
        <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
      </a>
    </div>
  );
}

export function ImmigrationAssistance() {
  const toItem = (s: ImmigrationService): AccordionItem => ({
    id: s.id,
    title: s.title,
    icon: s.icon,
    content: <ServiceDetail service={s} />,
  });
  const half = Math.ceil(IMMIGRATION_SERVICES.length / 2);

  return (
    <div id="immigration-assistance" aria-labelledby="immigration-title" role="region" className="mt-20 md:mt-24">
      <Reveal className="max-w-3xl">
        <h3
          id="immigration-title"
          className="text-2xl leading-[1.15] font-semibold tracking-tight text-on-navy md:text-3xl lg:text-4xl"
        >
          Russian immigration &amp; documentation assistance
        </h3>
        <p className="mt-4 max-w-[62ch] leading-relaxed text-on-navy-muted md:text-lg">
          Russian migration procedures can involve specific documentation and administrative requirements. Our team
          assists with general guidance, document support, and referrals to qualified professionals where appropriate.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-3 lg:grid-cols-2 lg:gap-x-5">
        <Accordion items={IMMIGRATION_SERVICES.slice(0, half).map(toItem)} />
        <Accordion items={IMMIGRATION_SERVICES.slice(half).map(toItem)} />
      </div>

      <Reveal className="mt-10 rounded-2xl border border-accent/40 bg-navy-raised p-6 md:p-8">
        <p className="flex items-center gap-3 text-lg font-semibold text-on-navy">
          <ShieldAlert className="size-5 text-accent" strokeWidth={2} aria-hidden="true" />
          Important limits of our service
        </p>
        <ul className="mt-5 grid gap-x-10 gap-y-3 md:grid-cols-2">
          {LEGAL_BOUNDARIES.map((b) => (
            <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-on-navy-muted">
              <span className="mt-2.5 h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-5 border-t border-navy-line pt-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-[60ch] text-[15px] leading-relaxed text-on-navy">
            For complex cases, we recommend consulting a qualified legal professional. We can help you prepare your
            documents for that conversation.
          </p>
          <ButtonLink href={ANCHORS.visaEnquiry} variant="onNavySolid" className="w-full shrink-0 sm:w-auto">
            Discuss your documentation requirements
          </ButtonLink>
        </div>
      </Reveal>
    </div>
  );
}
