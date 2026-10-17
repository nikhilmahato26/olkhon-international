import { BadgeCheck, Handshake, Route } from "lucide-react";
import logo from "../../assets/logo/olkhon-logo.webp";
import { business } from "../../config/business";
import { Reveal } from "../ui/Reveal";

const HIGHLIGHTS = [
  { icon: BadgeCheck, label: "Experienced Russian experts" },
  { icon: Handshake, label: "Direct university partnerships" },
  { icon: Route, label: "Support from application to admission" },
];

/** Company introduction, placed directly under the hero. Copy supplied by the client. */
export function About() {
  const years = business.experienceYears.replace("+", "");
  const plus = business.experienceYears.endsWith("+");

  return (
    <section id="about" aria-labelledby="about-title" className="pb-16 md:pb-24">
      <div className="container-page">
        <div className="grid items-center gap-10 border-t border-line pt-16 md:pt-20 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:order-2 lg:col-span-7">
            <h2
              id="about-title"
              className="text-3xl leading-[1.1] font-semibold tracking-tight md:text-4xl lg:text-[2.75rem]"
            >
              About Olkhon International Consultants
            </h2>
            <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-ink md:text-lg">
              Olkhon International Consultants provides trusted international education, visa, and travel services.
              With experienced Russian experts and over 10 years of experience in Russian visa services, we specialise
              in Russia while also serving clients across the GCC, Africa, Europe, and other global destinations.
            </p>
            <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted md:text-lg">
              We work directly with universities to provide students with reliable information, transparent guidance,
              and personalised admission support without unnecessary intermediaries. Our direct partnerships help us
              deliver efficient and student-focused services from application to admission.
            </p>
            <p className="mt-8 border-l-2 border-accent pl-4 text-lg leading-snug font-semibold text-ink-strong md:text-xl">
              Olkhon International Consultants: your trusted partner for global opportunities.
            </p>
            <ul className="mt-10 grid gap-5 sm:grid-cols-3">
              {HIGHLIGHTS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 sm:flex-col sm:items-start">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-ink">
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="font-semibold text-ink-strong">{label}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="lg:order-1 lg:col-span-5">
            <div className="relative isolate overflow-hidden rounded-2xl bg-navy p-8 text-on-navy md:p-10">
              <div
                className="absolute -right-20 -bottom-24 -z-10 size-72 rounded-full bg-brand/40 blur-3xl"
                aria-hidden="true"
              />
              {/* Light chip: the logo blue needs a light ground on navy. */}
              <span className="inline-flex rounded-xl bg-white p-3">
                <img
                  src={logo}
                  alt="Olkhon International Consultants logo"
                  width={656}
                  height={609}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-24"
                />
              </span>
              <p className="mt-10 text-7xl leading-none font-semibold tracking-[-0.04em] md:text-8xl">
                {years}
                {plus && <span className="text-accent">+</span>}
              </p>
              <p className="mt-3 max-w-[22ch] text-lg leading-snug">years of experience in Russian visa services</p>
              <div className="mt-8 border-t border-navy-line pt-6">
                <p className="text-sm text-on-navy-muted">Serving clients across</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {business.regionsServed.map((region) => (
                    <li key={region} className="rounded-full border border-white/20 px-3.5 py-1.5 text-sm">
                      {region}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
