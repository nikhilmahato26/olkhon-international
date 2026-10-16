import { PROGRAMS } from "../../data/programs";
import { ProgramCard } from "../ui/ProgramCard";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

/** Asymmetric 7/5, 5/7 rhythm so the four cards don't read as a flat grid. */
const SPANS = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];

export function StudyPrograms() {
  return (
    <section id="programs" aria-labelledby="programs-title" className="section-pad">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="programs-title"
            title="Explore study programs in Russia"
            description="Pick a pathway to start the conversation. We confirm eligibility, documents and current intakes with you directly."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:mt-14 md:grid-cols-12">
          {PROGRAMS.map((program, i) => (
            <Reveal key={program.id} delay={(i % 2) * 0.08} className={SPANS[i]}>
              <ProgramCard program={program} wide={SPANS[i] === "md:col-span-7"} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
