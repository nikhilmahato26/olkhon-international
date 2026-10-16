import { Check } from "lucide-react";
import kremlin from "../../assets/images/moscow-kremlin-panorama.webp";
import { ANCHORS } from "../../data/navigation";
import { ButtonLink } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const HIGHLIGHTS = [
  "University Admission Assistance",
  "Undergraduate Program Enquiries",
  "Diploma and Preparatory Courses",
  "Russian Language Courses",
  "Student Visa Assistance",
];

export function StudyInRussia() {
  return (
    <section id="study-in-russia" aria-labelledby="study-title" className="section-pad bg-surface-alt">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="study-title"
            title="Study in Russia with professional guidance"
            description="Russia offers a range of higher education pathways for international students. Olkhon International Consultants Pvt Ltd assists students with university admission enquiries, program selection, application documentation, and student visa guidance."
          />
        </Reveal>

        <div className="relative mt-12 md:mt-14">
          <Reveal y={16}>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[16/9] lg:aspect-[21/9]">
              <img
                src={kremlin}
                alt="The Moscow Kremlin towers and Saint Basil's Cathedral in autumn"
                width={1800}
                height={1200}
                loading="lazy"
                decoding="async"
                className="size-full object-cover object-[50%_40%]"
              />
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative mx-3 -mt-16 sm:mx-8 lg:absolute lg:right-8 lg:bottom-8 lg:mx-0 lg:mt-0 lg:w-[440px]"
          >
            <div className="rounded-2xl border border-line bg-surface-raised p-6 shadow-lift md:p-8">
              <h3 className="text-lg font-semibold tracking-tight">Where we can help</h3>
              <ul className="mt-5 flex flex-col gap-3.5">
                {HIGHLIGHTS.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-[15.5px] text-ink">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-navy">
                      <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
              <ButtonLink href={ANCHORS.apply} className="mt-7 w-full sm:w-auto">
                Apply for admission
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
