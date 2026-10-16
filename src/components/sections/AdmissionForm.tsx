import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircleMore, Phone, Send, UserRoundCheck } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import studentsGroup from "../../assets/images/students-group.webp";
import { business } from "../../config/business";
import { useEnquiry } from "../../context/EnquiryContext";
import { EDUCATION_LEVELS, PREFERRED_PROGRAMS, PREFERRED_UNIVERSITIES } from "../../data/options";
import { useEnquirySubmit } from "../../hooks/useEnquirySubmit";
import { messages } from "../../utils/whatsapp";
import { optionalText, phone, requiredChoice, requiredEmail, requiredText } from "../../utils/validation";
import { Button } from "../ui/Button";
import { EnquirySuccess } from "../ui/EnquirySuccess";
import { Field, SelectWrap, a11yProps } from "../ui/FormField";
import { Reveal } from "../ui/Reveal";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

const schema = z.object({
  fullName: requiredText("Enter your full name", 80),
  phone,
  email: requiredEmail(),
  country: optionalText(60),
  education: requiredChoice(EDUCATION_LEVELS, "Select your highest education completed"),
  program: requiredChoice(PREFERRED_PROGRAMS, "Select a preferred program"),
  university: requiredChoice(PREFERRED_UNIVERSITIES, "Select a preferred university"),
  intake: optionalText(40),
  message: optionalText(1000),
});

type Values = z.infer<typeof schema>;

const DEFAULTS: Values = {
  fullName: "",
  phone: "",
  email: "",
  country: "",
  education: "",
  program: "",
  university: "",
  intake: "",
  message: "",
};

const NEXT_STEPS = [
  {
    icon: MessageCircleMore,
    text: "Your details open in WhatsApp, ready to send to our team.",
  },
  {
    icon: Send,
    text: "We reply with the requirements and next steps for your chosen program.",
  },
  {
    icon: UserRoundCheck,
    text: "You decide how to proceed. Nothing goes to a university without your go-ahead.",
  },
];

export function AdmissionForm() {
  const { admissionPrefill } = useEnquiry();
  const { result, send, reset: resetResult } = useEnquirySubmit();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<Values>({ resolver: zodResolver(schema), defaultValues: DEFAULTS, mode: "onTouched" });

  // Apply prefill requests from CTAs elsewhere on the page.
  useEffect(() => {
    if (!admissionPrefill) return;
    resetResult();
    const opts = { shouldDirty: true, shouldValidate: isSubmitted };
    if (admissionPrefill.program) setValue("program", admissionPrefill.program, opts);
    if (admissionPrefill.university) setValue("university", admissionPrefill.university, opts);
    if (admissionPrefill.intake) setValue("intake", admissionPrefill.intake, opts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [admissionPrefill?.key]);

  const onSubmit = (v: Values) => {
    send(
      messages.admission({
        name: v.fullName,
        phone: v.phone,
        email: v.email,
        country: v.country,
        education: v.education,
        program: v.program,
        university: v.university,
        intake: v.intake,
        message: v.message,
      }),
    );
  };

  const err = (k: keyof Values) => errors[k]?.message;

  return (
    <section id="apply" aria-labelledby="apply-title" className="section-pad">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5">
          <h2 id="apply-title" className="text-3xl leading-[1.1] font-semibold tracking-tight md:text-4xl lg:text-[2.75rem]">
            Start your Study in Russia enquiry
          </h2>
          <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-muted md:text-lg">
            Tell us what you would like to study. This is an enquiry, not a university application.
          </p>
          <div className="mt-8 aspect-[16/10] overflow-hidden rounded-2xl">
            <img
              src={studentsGroup}
              alt="Four students smiling and talking together at a café table"
              width={1400}
              height={933}
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
          </div>
          <h3 className="mt-10 text-lg font-semibold">What happens after you enquire</h3>
          <ol className="mt-5 flex flex-col gap-4">
            {NEXT_STEPS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-ink">
                  <Icon className="size-[18px]" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <p className="pt-2 leading-relaxed text-ink">{text}</p>
              </li>
            ))}
          </ol>
          <a
            href={business.primaryPhone.uri}
            className="mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-brand-ink underline-offset-4 hover:underline"
          >
            <Phone className="size-4" strokeWidth={2} aria-hidden="true" />
            Prefer to talk? Call {business.primaryPhone.label}
          </a>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-7">
          <div className="rounded-2xl border border-line bg-surface-raised p-6 shadow-lift sm:p-8 md:p-10">
            {result ? (
              <EnquirySuccess
                message={result.message}
                popupBlocked={result.popupBlocked}
                emailSubject="Study in Russia admission enquiry"
                note="This is an enquiry only. No application has been submitted to any university. Our team will reply with the requirements and next steps."
                onReset={() => {
                  reset(DEFAULTS);
                  resetResult();
                }}
              />
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate aria-describedby="apply-form-note">
                <p className="text-sm text-muted">
                  Fields marked <span className="text-danger">*</span> are required.
                </p>
                <div className="mt-6 grid gap-x-5 gap-y-6 sm:grid-cols-2">
                  <Field id="ad-name" label="Full Name" required error={err("fullName")}>
                    <input
                      {...register("fullName")}
                      {...a11yProps("ad-name", err("fullName"))}
                      autoComplete="name"
                      className="field-input"
                    />
                  </Field>
                  <Field id="ad-phone" label="Phone Number" required error={err("phone")}>
                    <input
                      {...register("phone")}
                      {...a11yProps("ad-phone", err("phone"))}
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      className="field-input"
                    />
                  </Field>
                  <Field id="ad-email" label="Email Address" required error={err("email")}>
                    <input
                      {...register("email")}
                      {...a11yProps("ad-email", err("email"))}
                      type="email"
                      autoComplete="email"
                      className="field-input"
                    />
                  </Field>
                  <Field id="ad-country" label="Current Country" error={err("country")}>
                    <input
                      {...register("country")}
                      {...a11yProps("ad-country", err("country"))}
                      autoComplete="country-name"
                      className="field-input"
                    />
                  </Field>
                  <Field id="ad-education" label="Highest Education Completed" required error={err("education")}>
                    <SelectWrap>
                      <select
                        {...register("education")}
                        {...a11yProps("ad-education", err("education"))}
                        className="field-input"
                      >
                        <option value="">Select one</option>
                        {EDUCATION_LEVELS.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </SelectWrap>
                  </Field>
                  <Field id="ad-program" label="Preferred Program" required error={err("program")}>
                    <SelectWrap>
                      <select
                        {...register("program")}
                        {...a11yProps("ad-program", err("program"))}
                        className="field-input"
                      >
                        <option value="">Select one</option>
                        {PREFERRED_PROGRAMS.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </SelectWrap>
                  </Field>
                  <Field id="ad-university" label="Preferred University" required error={err("university")}>
                    <SelectWrap>
                      <select
                        {...register("university")}
                        {...a11yProps("ad-university", err("university"))}
                        className="field-input"
                      >
                        <option value="">Select one</option>
                        {PREFERRED_UNIVERSITIES.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </SelectWrap>
                  </Field>
                  <Field id="ad-intake" label="Intended Intake" error={err("intake")}>
                    <input
                      {...register("intake")}
                      {...a11yProps("ad-intake", err("intake"))}
                      placeholder="For example, January 2027"
                      className="field-input"
                    />
                  </Field>
                  <Field id="ad-message" label="Message" error={err("message")} className="sm:col-span-2">
                    <textarea
                      {...register("message")}
                      {...a11yProps("ad-message", err("message"))}
                      rows={4}
                      className="field-input resize-y"
                    />
                  </Field>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                    <WhatsAppIcon className="size-5" />
                    Submit admission enquiry
                  </Button>
                  <p id="apply-form-note" className="text-sm leading-relaxed text-muted">
                    Opens WhatsApp with your enquiry ready to send. Email is available too.
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
