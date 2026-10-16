import { SERVICES } from "../../data/services";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { ServiceCard } from "../ui/ServiceCard";

/**
 * Bento of seven services. lg: 2+1 / 1+1+1 / 1+2. md: spans set per cell in
 * data so every row is full.
 */
export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section-pad">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="services-title"
            title="How we can assist you"
            description="From your first university enquiry to documents, visas and travel, choose the help you need."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 0.06} className={service.cellClass ?? ""}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
