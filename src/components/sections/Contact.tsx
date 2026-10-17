import { zodResolver } from "@hookform/resolvers/zod";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { business } from "../../config/business";
import { useEnquirySubmit } from "../../hooks/useEnquirySubmit";
import { messages, whatsappUrl } from "../../utils/whatsapp";
import { phone, requiredText } from "../../utils/validation";
import { Button, ButtonLink } from "../ui/Button";
import { EnquirySuccess } from "../ui/EnquirySuccess";
import { Field, a11yProps } from "../ui/FormField";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

const schema = z.object({
  fullName: requiredText("Enter your full name", 80),
  phone,
  message: requiredText("Tell us briefly how we can help", 1000),
});

type Values = z.infer<typeof schema>;
const DEFAULTS: Values = { fullName: "", phone: "", message: "" };

function ContactRow({ icon: Icon, label, children }: { icon: typeof Phone; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-4 py-5 first:pt-0 last:pb-0">
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-ink">
        <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm text-muted">{label}</p>
        {children}
      </div>
    </div>
  );
}

export function Contact() {
  const { result, send, reset: resetResult } = useEnquirySubmit();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({ resolver: zodResolver(schema), defaultValues: DEFAULTS, mode: "onTouched" });

  const onSubmit = (v: Values) => send(messages.general({ name: v.fullName, phone: v.phone, message: v.message }));
  const err = (k: keyof Values) => errors[k]?.message;

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-pad">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="contact-title"
            title="Contact Olkhon International"
            description="Call, message or email us about study in Russia, visas, documentation or partnerships."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="h-full rounded-2xl border border-line bg-surface-raised p-6 md:p-8">
              <div className="divide-y divide-line">
                <ContactRow icon={Building2} label="Business name">
                  <p className="mt-0.5 font-semibold text-ink-strong">{business.name}</p>
                </ContactRow>
                <ContactRow icon={Phone} label="Primary phone, India (calls and WhatsApp)">
                  <a href={business.primaryPhone.uri} className="mt-0.5 block text-lg font-semibold text-ink-strong hover:text-brand-ink">
                    {business.primaryPhone.label}
                  </a>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <ButtonLink href={business.primaryPhone.uri} size="sm" variant="secondary">
                      <Phone className="size-4" strokeWidth={2} aria-hidden="true" />
                      Call us
                    </ButtonLink>
                    <ButtonLink href={whatsappUrl(messages.general())} external size="sm" variant="whatsapp">
                      <WhatsAppIcon className="size-4" />
                      WhatsApp enquiry
                    </ButtonLink>
                  </div>
                </ContactRow>
                <ContactRow icon={Phone} label="Additional phone, Russia (calls)">
                  <a href={business.additionalPhone.uri} className="mt-0.5 block text-lg font-semibold text-ink-strong hover:text-brand-ink">
                    {business.additionalPhone.label}
                  </a>
                </ContactRow>
                <ContactRow icon={Mail} label="Email">
                  <a href={`mailto:${business.email}`} className="mt-0.5 block font-semibold break-all text-ink-strong hover:text-brand-ink">
                    {business.email}
                  </a>
                  <ButtonLink href={`mailto:${business.email}`} size="sm" variant="secondary" className="mt-3">
                    <Mail className="size-4" strokeWidth={2} aria-hidden="true" />
                    Email us
                  </ButtonLink>
                </ContactRow>
                <ContactRow icon={MapPin} label="Business location">
                  <p className="mt-0.5 font-semibold text-ink-strong">{business.location.label}</p>
                </ContactRow>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="h-full rounded-2xl border border-line bg-surface-raised p-6 shadow-soft md:p-8">
              <h3 className="text-2xl font-semibold tracking-tight">General enquiry</h3>
              <p className="mt-2 text-muted">For anything not covered by the admission or visa forms.</p>
              {result ? (
                <div className="mt-8">
                  <EnquirySuccess
                    message={result.message}
                    popupBlocked={result.popupBlocked}
                    emailSubject="General enquiry"
                    note="We will reply to the phone number or WhatsApp account you contact us from."
                    onReset={() => {
                      reset(DEFAULTS);
                      resetResult();
                    }}
                  />
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-8">
                  <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
                    <Field id="ge-name" label="Full Name" required error={err("fullName")}>
                      <input
                        {...register("fullName")}
                        {...a11yProps("ge-name", err("fullName"))}
                        autoComplete="name"
                        className="field-input"
                      />
                    </Field>
                    <Field id="ge-phone" label="Phone Number" required error={err("phone")}>
                      <input
                        {...register("phone")}
                        {...a11yProps("ge-phone", err("phone"))}
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        className="field-input"
                      />
                    </Field>
                    <Field id="ge-message" label="Message" required error={err("message")} className="sm:col-span-2">
                      <textarea
                        {...register("message")}
                        {...a11yProps("ge-message", err("message"))}
                        rows={5}
                        className="field-input resize-y"
                      />
                    </Field>
                  </div>
                  <Button type="submit" size="lg" disabled={isSubmitting} className="mt-8 w-full sm:w-auto">
                    <WhatsAppIcon className="size-5" />
                    Send enquiry
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <div className="overflow-hidden rounded-2xl border border-line bg-surface-raised">
            <iframe
              title={`Map of ${business.location.label} (general area)`}
              src={business.location.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-72 w-full border-0 md:h-80"
            />
          </div>
          <p className="mt-3 text-sm text-muted">
            The map shows {business.location.city} generally. Contact us for meeting arrangements.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
