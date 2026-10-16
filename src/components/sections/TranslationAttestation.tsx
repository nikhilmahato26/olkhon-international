import { ArrowRight, Info, Landmark, Languages, Stamp, FileCheck2 } from "lucide-react";
import signing from "../../assets/images/document-signing.webp";
import { useEnquiry } from "../../context/EnquiryContext";
import { ANCHORS } from "../../data/navigation";
import { messages, whatsappUrl } from "../../utils/whatsapp";
import { ButtonLink } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

const STAGES = [
  {
    icon: Languages,
    title: "Translation into Russian",
    body: "We arrange translation of your academic and personal documents through qualified translators and check the translations against the originals for names, dates and grades.",
    by: "Qualified translators",
  },
  {
    icon: Stamp,
    title: "Notarization",
    body: "Where your university or visa process asks for it, we coordinate notarization of translations or copies and explain what the notary will need from you.",
    by: "A licensed notary",
  },
  {
    icon: FileCheck2,
    title: "Attestation and apostille",
    body: "We explain whether your documents need an apostille or attestation for use in Russia and help you prepare them for submission to the right office.",
    by: "The competent issuing authority",
  },
];

const DOCUMENTS = [
  "School and higher secondary certificates",
  "Mark sheets and transcripts",
  "Diploma and degree certificates",
  "Birth certificate",
  "Passport copy",
  "Supporting letters and certificates",
];

export function TranslationAttestation() {
  const { prefillVisa } = useEnquiry();

  return (
    <section id="translation-attestation" aria-labelledby="translation-title" className="section-pad bg-surface-alt">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[4/5]">
            <img
              src={signing}
              alt="A person signing a printed document with a pen"
              width={1400}
              height={934}
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
          </div>
          <div className="mt-6 rounded-2xl border border-line bg-surface-raised p-6">
            <h3 className="font-semibold">Documents students often ask about</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {DOCUMENTS.map((d) => (
                <li key={d} className="rounded-full border border-line bg-surface-alt px-3.5 py-1.5 text-sm text-ink">
                  {d}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Your university confirms the exact list. We check it with you before anything is translated.
            </p>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <h2
              id="translation-title"
              className="text-3xl leading-[1.1] font-semibold tracking-tight md:text-4xl lg:text-[2.75rem]"
            >
              Translation, notarization &amp; attestation assistance for students
            </h2>
            <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-muted md:text-lg">
              Admission and student visa procedures for Russia can require translated, notarized and legalized
              documents. We help you understand what your university asks for and coordinate each stage with the
              appropriate professionals.
            </p>
          </Reveal>

          <ol className="mt-10 flex flex-col">
            {STAGES.map(({ icon: Icon, title, body, by }, i) => (
              <Reveal as="li" key={title} delay={i * 0.06} className="relative flex gap-5 pb-10 last:pb-0">
                {i < STAGES.length - 1 && (
                  <span className="absolute top-14 bottom-2 left-6 w-px bg-line-strong" aria-hidden="true" />
                )}
                <span className="relative inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <Icon className="size-[22px]" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 max-w-[58ch] leading-relaxed text-muted">{body}</p>
                  <p className="mt-3 inline-flex items-center gap-2 text-sm text-ink">
                    <Landmark className="size-4 text-accent-ink" strokeWidth={1.75} aria-hidden="true" />
                    <span>
                      <span className="font-semibold">Carried out by:</span> {by}
                    </span>
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-10 flex gap-4 rounded-2xl border border-accent/30 bg-accent-soft p-5 md:p-6">
            <Info className="mt-0.5 size-5 shrink-0 text-accent-ink" strokeWidth={2} aria-hidden="true" />
            <p className="text-[15px] leading-relaxed text-ink">
              We do not issue, certify or legalize documents ourselves. Notarization is performed by licensed notaries,
              and apostille or attestation by the competent authorities. Requirements vary by university and document,
              so we confirm them with you first.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={ANCHORS.visaEnquiry} onClick={() => prefillVisa("Translation, Notarization & Attestation")}>
              Ask about document assistance
              <ArrowRight className="size-[18px]" strokeWidth={2} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={whatsappUrl(messages.translation())} external variant="secondary">
              <WhatsAppIcon className="size-[18px] text-whatsapp" />
              Chat on WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
