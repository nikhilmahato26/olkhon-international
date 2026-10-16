import { CircleCheck, Mail, RotateCcw } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { mailtoUrl } from "../../utils/contact";
import { whatsappUrl } from "../../utils/whatsapp";
import { ButtonLink } from "./Button";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Props = {
  message: string;
  emailSubject: string;
  popupBlocked: boolean;
  note: string;
  onReset: () => void;
};

/** Shown after a valid submission. WhatsApp first, email as fallback. */
export function EnquirySuccess({ message, emailSubject, popupBlocked, note, onReset }: Props) {
  const reduce = useReducedMotion();
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 0.98, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-start"
    >
      <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand-soft text-brand-ink">
        <CircleCheck className="size-7" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 ref={headingRef} tabIndex={-1} className="mt-5 text-2xl font-semibold tracking-tight outline-none">
        Your enquiry is ready to send
      </h3>
      <p className="mt-3 max-w-[52ch] leading-relaxed text-muted">
        {popupBlocked
          ? "Your browser kept WhatsApp from opening automatically. Use the button below to open it with your details filled in, then press send."
          : "WhatsApp opened in a new tab with your details filled in. Press send in WhatsApp to reach our team."}
      </p>

      <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <ButtonLink href={whatsappUrl(message)} external variant="whatsapp">
          <WhatsAppIcon className="size-5" />
          Open WhatsApp
        </ButtonLink>
        <ButtonLink href={mailtoUrl(emailSubject, message)} variant="secondary">
          <Mail className="size-[18px]" strokeWidth={1.75} aria-hidden="true" />
          Send by email instead
        </ButtonLink>
      </div>

      <p className="mt-6 rounded-xl bg-surface-alt px-4 py-3 text-sm leading-relaxed text-ink">{note}</p>

      <button
        type="button"
        onClick={onReset}
        className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-ink underline-offset-4 hover:underline"
      >
        <RotateCcw className="size-4" strokeWidth={2} aria-hidden="true" />
        Start a new enquiry
      </button>
    </motion.div>
  );
}
