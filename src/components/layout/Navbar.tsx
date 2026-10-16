import { Mail, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { business } from "../../config/business";
import { useActiveSection } from "../../hooks/useActiveSection";
import { ANCHORS, NAV_ITEMS, SECTION_TO_NAV } from "../../data/navigation";
import { messages, whatsappUrl } from "../../utils/whatsapp";
import { ButtonLink } from "../ui/Button";
import { Logo } from "../ui/Logo";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

const SECTION_IDS = Object.keys(SECTION_TO_NAV);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const section = useActiveSection(SECTION_IDS);
  const active = section ? SECTION_TO_NAV[section] : null;
  const reduce = useReducedMotion();

  // Lock page scroll and close on Escape while the mobile sheet is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close the sheet if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur-md supports-backdrop-filter:bg-surface/80">
      <nav aria-label="Main" className="container-page flex h-18 items-center justify-between gap-3 sm:gap-6">
        <a href={ANCHORS.top} className="shrink-0 rounded-xl" aria-label={`${business.displayName}, back to top`}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative rounded-full px-3 py-2 text-[14.5px] font-medium whitespace-nowrap transition-colors duration-200 ${
                    isActive ? "text-brand-ink" : "text-ink hover:text-brand-ink"
                  }`}
                >
                  {item.shortLabel}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent transition-transform duration-300 ease-out-soft motion-reduce:transition-none ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                    aria-hidden="true"
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={business.primaryPhone.uri}
            className="hidden items-center gap-2 text-sm font-semibold text-ink-strong hover:text-brand-ink 2xl:flex"
          >
            <Phone className="size-4 text-brand-ink" strokeWidth={2} aria-hidden="true" />
            {business.primaryPhone.label}
          </a>
          <ButtonLink href={ANCHORS.apply} size="sm" className="max-sm:hidden">
            Apply for admission
          </ButtonLink>
          <ButtonLink href={ANCHORS.apply} size="sm" className="max-[399px]:hidden sm:hidden" aria-label="Apply for admission">
            Apply
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-full border border-line-strong text-ink-strong hover:border-brand xl:hidden"
          >
            {open ? <X className="size-5" strokeWidth={2} /> : <Menu className="size-5" strokeWidth={2} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-full z-50 h-[calc(100dvh-72px)] overflow-y-auto overscroll-contain border-t border-line bg-surface xl:hidden"
          >
            <div className="container-page flex min-h-full flex-col py-6">
              <ul className="flex flex-col">
                {NAV_ITEMS.map((item, i) => (
                  <m.li
                    key={item.id}
                    initial={reduce ? false : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * i, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex min-h-14 items-center border-b border-line text-xl font-semibold tracking-tight ${
                        active === item.id ? "text-brand-ink" : "text-ink-strong"
                      }`}
                    >
                      {item.label}
                    </a>
                  </m.li>
                ))}
              </ul>

              <div className="mt-8 grid gap-3 pb-24">
                <ButtonLink href={ANCHORS.apply} onClick={() => setOpen(false)} size="lg">
                  Apply for admission
                </ButtonLink>
                <ButtonLink href={ANCHORS.visaEnquiry} onClick={() => setOpen(false)} variant="secondary" size="lg">
                  Russia visa &amp; documentation enquiry
                </ButtonLink>
                <div className="mt-4 grid gap-2 text-[15px]">
                  <a href={business.primaryPhone.uri} className="flex min-h-11 items-center gap-3 font-semibold text-ink-strong">
                    <Phone className="size-4.5 text-brand-ink" strokeWidth={1.75} aria-hidden="true" />
                    {business.primaryPhone.label}
                    <span className="text-sm font-normal text-muted">India</span>
                  </a>
                  <a href={business.additionalPhone.uri} className="flex min-h-11 items-center gap-3 font-semibold text-ink-strong">
                    <Phone className="size-4.5 text-brand-ink" strokeWidth={1.75} aria-hidden="true" />
                    {business.additionalPhone.label}
                    <span className="text-sm font-normal text-muted">Russia</span>
                  </a>
                  <a
                    href={whatsappUrl(messages.general())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center gap-3 font-semibold text-ink-strong"
                  >
                    <WhatsAppIcon className="size-4.5 text-whatsapp" />
                    WhatsApp enquiry
                  </a>
                  <a href={`mailto:${business.email}`} className="flex min-h-11 items-center gap-3 font-semibold break-all text-ink-strong">
                    <Mail className="size-4.5 shrink-0 text-brand-ink" strokeWidth={1.75} aria-hidden="true" />
                    {business.email}
                  </a>
                </div>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
