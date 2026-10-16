import { zodResolver } from "@hookform/resolvers/zod";
import { Building2, GraduationCap, Plane, Users } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import handshake from "../../assets/images/partner-handshake.webp";
import { PARTNERSHIP_INTERESTS } from "../../data/options";
import { useEnquirySubmit } from "../../hooks/useEnquirySubmit";
import { messages } from "../../utils/whatsapp";
import { optionalText, phone, requiredChoice, requiredEmail, requiredText } from "../../utils/validation";
import { Button } from "../ui/Button";
import { EnquirySuccess } from "../ui/EnquirySuccess";
import { Field, SelectWrap, a11yProps } from "../ui/FormField";
import { Reveal } from "../ui/Reveal";

const FEATURES = [
  {
    icon: Users,
    title: "Education Agent Enquiries",
    body: "Discuss working together if you recruit students for Russian universities.",
  },
  {
    icon: GraduationCap,
    title: "Student Admission Coordination",
    body: "Coordinate admission enquiries and documentation for the students you represent.",
  },
  {
    icon: Building2,
    title: "Russia-Focused Education Services",
    body: "Work with a team focused on Russian university admissions, including Synergy University.",
  },
  {
    icon: Plane,
    title: "International Travel Cooperation",
    body: "Explore cooperation on travel-related services for students and travellers.",
  },
];

const schema = z.object({
  fullName: requiredText("Enter your full name", 80),
  organization: requiredText("Enter your organization name", 120),
  email: requiredEmail("Enter your business email"),
  phone,
  country: optionalText(60),
  interest: requiredChoice(PARTNERSHIP_INTERESTS, "Select a partnership interest"),
  message: optionalText(1000),
});

type Values = z.infer<typeof schema>;

const DEFAULTS: Values = { fullName: "", organization: "", email: "", phone: "", country: "", interest: "", message: "" };

export function B2BPartnerships() {
  const { result, send, reset: resetResult } = useEnquirySubmit();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({ resolver: zodResolver(schema), defaultValues: DEFAULTS, mode: "onTouched" });

  const onSubmit = (v: Values) =>
    send(
      messages.b2b({
        name: v.fullName,
        phone: v.phone,
        email: v.email,
        organization: v.organization,
        country: v.country,
        interest: v.interest,
        message: v.message,
      }),
    );

  const err = (k: keyof Values) => errors[k]?.message;

  return (
    <section id="b2b-partnerships" aria-labelledby="b2b-title" className="section-pad bg-surface-alt">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 id="b2b-title" className="text-3xl leading-[1.1] font-semibold tracking-tight md:text-4xl lg:text-[2.75rem]">
              Partner with Olkhon International
            </h2>
            <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-muted md:text-lg">
              We welcome enquiries from education consultants, student recruitment agents, and travel businesses
              interested in discussing potential cooperation related to Russian university admissions and
              international travel services.
            </p>
          </Reveal>
          <Reveal delay={0.06} className="mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
            <img
              src={handshake}
              alt="Two business partners shaking hands across a table"
              width={1400}
              height={935}
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
          </Reveal>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {FEATURES.map(({ icon: Icon, title, body }, i) => (
              <Reveal as="li" key={title} delay={i * 0.05}>
                <Icon className="size-6 text-brand-ink" strokeWidth={1.75} aria-hidden="true" />
                <p className="mt-3 font-semibold text-ink-strong">{title}</p>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{body}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.08} className="lg:col-span-7">
          <div className="rounded-2xl border border-line bg-surface-raised p-6 shadow-lift sm:p-8 md:p-10 lg:sticky lg:top-28">
            <h3 className="text-2xl font-semibold tracking-tight">Become a partner</h3>
            <p className="mt-2 text-muted">Share a few details and we will get back to you to discuss next steps.</p>
            {result ? (
              <div className="mt-8">
                <EnquirySuccess
                  message={result.message}
                  popupBlocked={result.popupBlocked}
                  emailSubject="B2B partnership enquiry"
                  note="This starts a conversation only. Any cooperation terms are agreed directly and in writing."
                  onReset={() => {
                    reset(DEFAULTS);
                    resetResult();
                  }}
                />
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-8">
                <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
                  <Field id="b2b-name" label="Full Name" required error={err("fullName")}>
                    <input
                      {...register("fullName")}
                      {...a11yProps("b2b-name", err("fullName"))}
                      autoComplete="name"
                      className="field-input"
                    />
                  </Field>
                  <Field id="b2b-org" label="Organization Name" required error={err("organization")}>
                    <input
                      {...register("organization")}
                      {...a11yProps("b2b-org", err("organization"))}
                      autoComplete="organization"
                      className="field-input"
                    />
                  </Field>
                  <Field id="b2b-email" label="Business Email" required error={err("email")}>
                    <input
                      {...register("email")}
                      {...a11yProps("b2b-email", err("email"))}
                      type="email"
                      autoComplete="work email"
                      className="field-input"
                    />
                  </Field>
                  <Field id="b2b-phone" label="Phone Number" required error={err("phone")}>
                    <input
                      {...register("phone")}
                      {...a11yProps("b2b-phone", err("phone"))}
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      className="field-input"
                    />
                  </Field>
                  <Field id="b2b-country" label="Country" error={err("country")}>
                    <input
                      {...register("country")}
                      {...a11yProps("b2b-country", err("country"))}
                      autoComplete="country-name"
                      className="field-input"
                    />
                  </Field>
                  <Field id="b2b-interest" label="Partnership Interest" required error={err("interest")}>
                    <SelectWrap>
                      <select
                        {...register("interest")}
                        {...a11yProps("b2b-interest", err("interest"))}
                        className="field-input"
                      >
                        <option value="">Select one</option>
                        {PARTNERSHIP_INTERESTS.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </SelectWrap>
                  </Field>
                  <Field id="b2b-message" label="Message" error={err("message")} className="sm:col-span-2">
                    <textarea
                      {...register("message")}
                      {...a11yProps("b2b-message", err("message"))}
                      rows={4}
                      className="field-input resize-y"
                    />
                  </Field>
                </div>
                <Button type="submit" size="lg" disabled={isSubmitting} className="mt-8 w-full sm:w-auto">
                  Become a partner
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
