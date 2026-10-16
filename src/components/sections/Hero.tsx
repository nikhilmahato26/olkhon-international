import { ArrowRight, BadgeCheck, GraduationCap, ShieldCheck } from "lucide-react";
import { m, useReducedMotion } from "motion/react";
import stBasils from "../../assets/images/moscow-st-basils.webp";
import studentsOutdoors from "../../assets/images/students-outdoors.webp";
import { ANCHORS } from "../../data/navigation";
import { ButtonLink } from "../ui/Button";

const TRUST = [
  {
    icon: GraduationCap,
    title: "Russia university admission assistance",
    body: "Program selection, application documents and admission steps.",
  },
  {
    icon: BadgeCheck,
    title: "Synergy University admission support",
    body: "Enquiries for the current BBA and Russian language intakes.",
  },
  {
    icon: ShieldCheck,
    title: "Visa and documentation guidance",
    body: "Student visas, invitations, translations and migration paperwork.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        };

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-130 bg-linear-to-b from-brand-soft/70 to-transparent"
        aria-hidden="true"
      />
      <div className="container-page grid items-center gap-12 pt-10 pb-14 md:pt-14 lg:grid-cols-12 lg:gap-8 lg:pt-12 lg:pb-20">
        <div className="lg:col-span-6 xl:col-span-6">
          <m.p
            {...fadeUp(0)}
            className="text-xs font-semibold tracking-[0.16em] text-accent-ink uppercase"
          >
            Olkhon International · Study in Russia
          </m.p>
          <m.h1
            {...fadeUp(0.08)}
            id="hero-title"
            className="mt-5 text-[2.75rem] leading-[1.02] font-semibold tracking-[-0.035em] sm:text-6xl lg:text-[4.25rem] xl:text-7xl"
          >
            Your future starts <span className="text-brand-ink">in Russia</span>
          </m.h1>
          <m.p {...fadeUp(0.16)} className="mt-6 max-w-136 text-lg leading-relaxed text-muted md:text-xl">
            Undergraduate, diploma, preparatory and Russian language programs, with guidance from your first admission
            enquiry to your student visa.
          </m.p>
          <m.div {...fadeUp(0.24)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={ANCHORS.programs} size="lg">
              Explore study programs
              <ArrowRight className="size-4.5" strokeWidth={2} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={ANCHORS.apply} size="lg" variant="secondary">
              Apply for admission
            </ButtonLink>
          </m.div>
        </div>

        <div className="relative lg:col-span-6">
          <m.div
            initial={reduce ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="relative ml-auto aspect-4/5 max-h-155 w-full overflow-hidden rounded-2xl shadow-lift sm:w-[84%]"
          >
            <img
              src={stBasils}
              alt="Saint Basil's Cathedral on Red Square, Moscow, under a bright blue sky"
              width={1000}
              height={1292}
              // React 18 passes lowercase attributes through untouched.
              {...{ fetchpriority: "high" }}
              decoding="async"
              className="size-full object-cover"
            />
          </m.div>
          <m.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="absolute -bottom-6 left-0 hidden aspect-4/5 w-[40%] overflow-hidden rounded-2xl border-[6px] border-surface shadow-lift sm:block"
          >
            <img
              src={studentsOutdoors}
              alt="A group of smiling university students sitting together outdoors"
              width={900}
              height={1164}
              decoding="async"
              className="size-full object-cover"
            />
          </m.div>
        </div>
      </div>

      <div className="container-page pb-16 md:pb-20">
        <ul className="grid overflow-hidden rounded-2xl border border-line bg-surface-raised shadow-soft md:grid-cols-3 md:divide-x md:divide-line">
          {TRUST.map(({ icon: Icon, title, body }, i) => (
            <m.li
              key={title}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 + i * 0.08, ease }}
              className="flex gap-4 border-line p-6 not-last:border-b md:not-last:border-b-0 lg:p-7"
            >
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-ink">
                <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-ink-strong">{title}</p>
                <p className="mt-1 text-[15px] leading-relaxed text-muted">{body}</p>
              </div>
            </m.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
