import type { LucideIcon } from "lucide-react";
import {
  Compass,
  FileCheck2,
  Handshake,
  Languages,
  Plane,
  Scale,
  ShieldCheck,
} from "lucide-react";
import moscowCityImg from "../assets/images/moscow-city-towers.webp";
import travelImg from "../assets/images/travel-wing.webp";
import { ANCHORS } from "./navigation";
import type { PreferredProgram, PreferredUniversity, VisaService } from "./options";
import { messages, whatsappUrl } from "../utils/whatsapp";

/**
 * Every service action resolves to a real destination: an on-page section,
 * a prefilled form, or a prefilled WhatsApp chat.
 */
export type ServiceAction = {
  label: string;
  href: string;
  external?: boolean;
  prefillVisa?: VisaService;
  prefillAdmission?: { program?: PreferredProgram; university?: PreferredUniversity };
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  action: ServiceAction;
  /** Visual treatment for the bento cell. */
  tone: "image" | "plain" | "accent" | "navy";
  image?: string;
  /** Grid placement. Spans are chosen so no breakpoint leaves an empty cell. */
  cellClass?: string;
};

export const SERVICES: Service[] = [
  {
    id: "study-abroad",
    title: "Study Abroad Consultancy",
    description: "Guidance for students exploring international education opportunities, with a focus on Russia.",
    icon: Compass,
    action: { label: "Learn more", href: ANCHORS.studyInRussia },
    tone: "image",
    image: moscowCityImg,
    cellClass: "md:col-span-2",
  },
  {
    id: "admission",
    title: "University Admission Assistance",
    description:
      "Support with program enquiries, university selection, application documentation, and admission procedures.",
    icon: FileCheck2,
    action: { label: "Enquire now", href: ANCHORS.apply, prefillAdmission: { university: "Need Guidance" } },
    tone: "plain",
  },
  {
    id: "student-visa",
    title: "Student Visa Assistance",
    description:
      "Guidance on student visa application requirements and supporting documentation for study in Russia.",
    icon: ShieldCheck,
    action: { label: "Enquire now", href: ANCHORS.visaEnquiry, prefillVisa: "Student Visa Assistance" },
    tone: "plain",
  },
  {
    id: "translation",
    title: "Translation, Notarization & Attestation",
    description:
      "Help arranging Russian translations of student documents, notarization through licensed notaries, and apostille or attestation guidance.",
    icon: Languages,
    action: { label: "Learn more", href: ANCHORS.translation },
    tone: "accent",
  },
  {
    id: "travel",
    title: "International Travel Services",
    description: "Enquire about international travel-related assistance for your education or travel plans.",
    icon: Plane,
    action: { label: "Enquire on WhatsApp", href: whatsappUrl(messages.travel()), external: true },
    tone: "image",
    image: travelImg,
  },
  {
    id: "immigration",
    title: "Immigration Consultancy",
    description:
      "Guidance on Russian migration-related documentation and procedures, with referrals to qualified professionals where required.",
    icon: Scale,
    action: { label: "Learn more", href: ANCHORS.immigration },
    tone: "plain",
    cellClass: "md:col-span-2 lg:col-span-1",
  },
  {
    id: "b2b",
    title: "B2B Agent Partnerships",
    description:
      "Connect with Olkhon International Consultants Pvt Ltd to discuss potential cooperation with education agents and travel partners.",
    icon: Handshake,
    action: { label: "Become a partner", href: ANCHORS.b2b },
    tone: "navy",
    cellClass: "md:col-span-2",
  },
];
