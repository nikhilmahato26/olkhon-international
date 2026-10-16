import logo from "../../assets/logo/olkhon-logo.webp";
import { Reveal } from "../ui/Reveal";

const FOCUS = [
  "Russian university admission enquiries",
  "Synergy University admission support",
  "Student visa documentation guidance",
  "Translation, notarization and attestation assistance",
  "Russian visa invitations",
  "Migration-related documentation",
  "International travel services",
  "B2B partnership enquiries",
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-pad">
      <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          {/* Always a light panel: the logo's blue needs a light ground in both themes. */}
          <div className="flex aspect-square items-center justify-center rounded-2xl border border-line bg-white p-10 sm:p-14">
            <img
              src={logo}
              alt="Olkhon International Consultants Pvt Ltd logo: Your Better Choice"
              width={656}
              height={609}
              loading="lazy"
              decoding="async"
              className="h-auto w-full max-w-90"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-7">
          <h2 id="about-title" className="text-3xl leading-[1.1] font-semibold tracking-tight md:text-4xl lg:text-[2.75rem]">
            About Olkhon International Consultants
          </h2>
          <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-ink md:text-lg">
            Olkhon International Consultants Pvt Ltd focuses on international education and related support services,
            with a specialization in Russian university admission enquiries. The company also provides guidance for
            student visa documentation, Russian visa invitations, migration-related documentation, international travel
            services, and B2B partnership enquiries.
          </p>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted md:text-lg">
            Our approach is based on understanding each client&apos;s requirements, providing clear documentation
            guidance, and referring complex legal matters to qualified professionals where required.
          </p>
          <h3 className="mt-10 text-base font-semibold">What we focus on</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {FOCUS.map((f) => (
              <li key={f} className="rounded-full border border-line bg-surface-alt px-4 py-2 text-sm text-ink">
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
