import { zodResolver } from "@hookform/resolvers/zod";
import { LockKeyhole } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEnquiry } from "../../context/EnquiryContext";
import { VISA_SERVICES } from "../../data/options";
import { useEnquirySubmit } from "../../hooks/useEnquirySubmit";
import { messages } from "../../utils/whatsapp";
import { optionalEmail, optionalText, phone, requiredChoice, requiredText } from "../../utils/validation";
import { Button } from "../ui/Button";
import { EnquirySuccess } from "../ui/EnquirySuccess";
import { Field, SelectWrap, a11yProps } from "../ui/FormField";
import { Reveal } from "../ui/Reveal";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

const schema = z.object({
  fullName: requiredText("Enter your full name", 80),
  phone,
  email: optionalEmail,
  country: optionalText(60),
  service: requiredChoice(VISA_SERVICES, "Select the service you need"),
  description: requiredText("Briefly describe what you need help with", 1000).min(
    10,
    "Please add a little more detail (at least 10 characters)",
  ),
});

type Values = z.infer<typeof schema>;

const DEFAULTS: Values = { fullName: "", phone: "", email: "", country: "", service: "", description: "" };

export function VisaEnquiryForm() {
  const { visaPrefill } = useEnquiry();
  const { result, send, reset: resetResult } = useEnquirySubmit();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<Values>({ resolver: zodResolver(schema), defaultValues: DEFAULTS, mode: "onTouched" });

  useEffect(() => {
    if (!visaPrefill) return;
    resetResult();
    setValue("service", visaPrefill.service, { shouldDirty: true, shouldValidate: isSubmitted });
    // Only react to new prefill requests.
  }, [visaPrefill?.key]);

  const onSubmit = (v: Values) => {
    send(
      messages.visa({
        name: v.fullName,
        phone: v.phone,
        email: v.email,
        service: v.service,
        country: v.country,
        description: v.description,
      }),
    );
  };

  const err = (k: keyof Values) => errors[k]?.message;

  return (
    <section id="visa-enquiry" aria-labelledby="visa-enquiry-title" className="section-pad bg-surface-alt">
      <div className="container-page max-w-4xl">
        <Reveal>
          <h2
            id="visa-enquiry-title"
            className="text-3xl leading-[1.1] font-semibold tracking-tight md:text-4xl lg:text-[2.75rem]"
          >
            Russia visa &amp; documentation enquiry
          </h2>
          <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-muted md:text-lg">
            For business and tourist visa documents, student visas, translations, registration, extensions, residence
            procedures and other migration paperwork.
          </p>
        </Reveal>

        <Reveal delay={0.06} className="mt-8 flex gap-4 rounded-2xl border border-brand/25 bg-brand-soft p-5 md:p-6">
          <LockKeyhole className="mt-0.5 size-5 shrink-0 text-brand-ink" strokeWidth={2} aria-hidden="true" />
          <p id="visa-privacy-note" className="text-[15px] leading-relaxed text-ink">
            Please do not submit passport numbers, identity document numbers, or sensitive personal documents through
            this initial enquiry form. Our team can explain appropriate document-sharing procedures if required.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-6">
          <div className="rounded-2xl border border-line bg-surface-raised p-6 shadow-lift sm:p-8 md:p-10">
            {result ? (
              <EnquirySuccess
                message={result.message}
                popupBlocked={result.popupBlocked}
                emailSubject="Russia visa and documentation enquiry"
                note="Visa, migration and residence decisions are made by the relevant authorities. We will explain the requirements and what we can assist with."
                onReset={() => {
                  reset(DEFAULTS);
                  resetResult();
                }}
              />
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate aria-describedby="visa-privacy-note">
                <p className="text-sm text-muted">
                  Fields marked <span className="text-danger">*</span> are required.
                </p>
                <div className="mt-6 grid gap-x-5 gap-y-6 sm:grid-cols-2">
                  <Field id="vi-name" label="Full Name" required error={err("fullName")}>
                    <input
                      {...register("fullName")}
                      {...a11yProps("vi-name", err("fullName"))}
                      autoComplete="name"
                      className="field-input"
                    />
                  </Field>
                  <Field id="vi-phone" label="Phone Number" required error={err("phone")}>
                    <input
                      {...register("phone")}
                      {...a11yProps("vi-phone", err("phone"))}
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      className="field-input"
                    />
                  </Field>
                  <Field id="vi-email" label="Email" error={err("email")}>
                    <input
                      {...register("email")}
                      {...a11yProps("vi-email", err("email"))}
                      type="email"
                      autoComplete="email"
                      className="field-input"
                    />
                  </Field>
                  <Field id="vi-country" label="Current Country" error={err("country")}>
                    <input
                      {...register("country")}
                      {...a11yProps("vi-country", err("country"))}
                      autoComplete="country-name"
                      className="field-input"
                    />
                  </Field>
                  <Field id="vi-service" label="Service Required" required error={err("service")} className="sm:col-span-2">
                    <SelectWrap>
                      <select
                        {...register("service")}
                        {...a11yProps("vi-service", err("service"))}
                        className="field-input"
                      >
                        <option value="">Select a service</option>
                        {VISA_SERVICES.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </SelectWrap>
                  </Field>
                  <Field
                    id="vi-description"
                    label="Brief Description"
                    required
                    error={err("description")}
                    hint="A few lines about your situation. No document numbers, please."
                    className="sm:col-span-2"
                  >
                    <textarea
                      {...register("description")}
                      {...a11yProps(
                        "vi-description",
                        err("description"),
                        "A few lines about your situation. No document numbers, please.",
                      )}
                      rows={5}
                      className="field-input resize-y"
                    />
                  </Field>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                    <WhatsAppIcon className="size-5" />
                    Send visa service enquiry
                  </Button>
                  <p className="text-sm leading-relaxed text-muted">
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
