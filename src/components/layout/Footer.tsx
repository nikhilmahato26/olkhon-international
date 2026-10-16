import { Mail, MapPin, Phone } from "lucide-react";
import { business } from "../../config/business";
import { ANCHORS, NAV_ITEMS } from "../../data/navigation";
import { messages, whatsappUrl } from "../../utils/whatsapp";
import { Logo } from "../ui/Logo";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

const STUDY_LINKS = [
  { label: "University Admission Assistance", href: ANCHORS.apply },
  { label: "Undergraduate Programs", href: ANCHORS.programs },
  { label: "Diploma and Preparatory Courses", href: ANCHORS.programs },
  { label: "Russian Language Courses", href: ANCHORS.programs },
  { label: "Student Visa Assistance", href: ANCHORS.visaEnquiry },
  { label: "Translation, Notarization & Attestation", href: ANCHORS.translation },
];

const VISA_LINKS = [
  { label: "Business Visa Invitation", href: ANCHORS.businessVisa },
  { label: "Tourist Voucher Support", href: ANCHORS.touristVisa },
  { label: "Registration Support", href: ANCHORS.immigration },
  { label: "Visa Extension Guidance", href: ANCHORS.immigration },
  { label: "Migration Documentation", href: ANCHORS.immigration },
  { label: "Residence Procedure Guidance", href: ANCHORS.immigration },
];

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-on-navy">{title}</h2>
      <ul className="mt-5 flex flex-col gap-3">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-[15px] text-on-navy-muted transition-colors hover:text-white">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-on-navy-muted">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <Logo tone="navy" />
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed">
              Your gateway to education and opportunities in Russia.
            </p>
            <a
              href={whatsappUrl(messages.general())}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-5 text-sm font-semibold text-on-navy transition-colors hover:border-white/60 hover:bg-white/10"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp Olkhon International
            </a>
          </div>

          <div className="lg:col-span-2">
            <LinkColumn title="Quick links" links={NAV_ITEMS.map((n) => ({ label: n.label, href: n.href }))} />
          </div>
          <div className="lg:col-span-2">
            <LinkColumn title="Study abroad services" links={STUDY_LINKS} />
          </div>
          <div className="lg:col-span-2">
            <LinkColumn title="Russia visa services" links={VISA_LINKS} />
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold text-on-navy">Contact</h2>
            <ul className="mt-5 flex flex-col gap-4 text-[15px]">
              <li>
                <a href={business.primaryPhone.uri} className="flex items-start gap-3 hover:text-white">
                  <Phone className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={2} aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-on-navy">{business.primaryPhone.label}</span>
                    India, calls and WhatsApp
                  </span>
                </a>
              </li>
              <li>
                <a href={business.additionalPhone.uri} className="flex items-start gap-3 hover:text-white">
                  <Phone className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={2} aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-on-navy">{business.additionalPhone.label}</span>
                    Russia, calls
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="flex items-start gap-3 break-all hover:text-white">
                  <Mail className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={2} aria-hidden="true" />
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={2} aria-hidden="true" />
                {business.location.label}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-navy-line bg-navy-raised/60 p-6 md:p-8">
          <h2 className="text-sm font-semibold text-on-navy">Disclaimer</h2>
          <p className="mt-3 max-w-[90ch] text-[15px] leading-relaxed">
            Olkhon International Consultants Pvt Ltd provides consultancy, administrative, and documentation assistance
            within the scope of its services. Visa, immigration, admission, and residence decisions are made by the
            relevant institutions and authorities. Outcomes are not guaranteed. Legal matters may require advice from
            qualified legal professionals.
          </p>
          <p className="mt-3 max-w-[90ch] text-[15px] leading-relaxed">
            Synergy University is an independent institution. This website is operated by Olkhon International
            Consultants Pvt Ltd, not by the university or by any government body.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-navy-line pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Olkhon International Consultants Pvt Ltd. All rights reserved.</p>
          <p>
            Photography via{" "}
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-white"
            >
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
