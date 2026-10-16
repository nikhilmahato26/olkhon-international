import { m, useReducedMotion } from "motion/react";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const STEPS = [
  {
    title: "Understand your requirement",
    body: "We collect information about your situation as a student, traveller or applicant.",
  },
  {
    title: "Review documentation needs",
    body: "We explain the relevant documentation categories and identify missing information where possible.",
  },
  {
    title: "Provide guidance and assistance",
    body: "We assist with administrative documentation and application preparation within the scope of the service.",
  },
  {
    title: "Refer when necessary",
    body: "For complex legal matters, we direct you to appropriately qualified legal professionals.",
  },
];

export function ServiceApproach() {
  const reduce = useReducedMotion();
  return (
    <section id="approach" aria-labelledby="approach-title" className="section-pad">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="approach-title"
            title="Clear guidance. Documentation support. Professional referrals."
            description="We assist foreign citizens with Russian visa, migration, and legal documentation matters through guidance, document support, and referrals to qualified professionals where required."
          />
        </Reveal>

        <div className="relative mt-14">
          {/* Connecting line: draws once on desktop to show the sequence. */}
          <m.span
            aria-hidden="true"
            className="absolute top-6 right-[calc(25%-3rem)] left-6 hidden h-px origin-left bg-line-strong lg:block"
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          />
        <ol className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={0.1 + i * 0.1} className="relative">
              <span className="relative inline-flex size-12 items-center justify-center rounded-full border-2 border-brand bg-surface text-lg font-semibold text-brand-ink">
                {i + 1}
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 max-w-[38ch] leading-relaxed text-muted">{step.body}</p>
            </Reveal>
          ))}
        </ol>
        </div>

        <Reveal className="mt-14 border-t border-line pt-8">
          <p className="max-w-[70ch] leading-relaxed text-ink">
            Not every matter can be resolved through a consultancy. When a case needs legal representation, we tell you
            early and point you to qualified help.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
