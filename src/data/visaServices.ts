import type { LucideIcon } from "lucide-react";
import {
  Ban,
  BookMarked,
  CalendarClock,
  ClipboardList,
  FileSearch,
  FileWarning,
  Gavel,
  House,
  IdCard,
  MessagesSquare,
  Route,
} from "lucide-react";
import type { VisaService } from "./options";

/** How assistance is scoped. Legal advice is always by referral. */
export type ScopeCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  referral?: boolean;
};

export const SCOPE_CATEGORIES: ScopeCategory[] = [
  {
    title: "Document processing assistance",
    description: "Preparing, organizing and checking documents for completeness before submission.",
    icon: ClipboardList,
  },
  {
    title: "Application guidance",
    description: "Explaining requirements, forms and the steps involved in each procedure.",
    icon: Route,
  },
  {
    title: "Administrative support",
    description: "Help with paperwork, correspondence and keeping your documentation in order.",
    icon: BookMarked,
  },
  {
    title: "Legal advice",
    description:
      "Provided only by appropriately qualified legal professionals. Where your matter needs it, we refer you.",
    icon: Gavel,
    referral: true,
  },
];

export const BUSINESS_VISA_SERVICES = [
  "Russian business visa invitation support",
  "Invitation document processing assistance",
  "Guidance on business visa application requirements",
];

export const TOURIST_VISA_SERVICES = [
  "Russian tourist voucher assistance",
  "Tourist confirmation documentation support",
  "Tourist invitation documentation assistance",
  "Guidance on tourist visa application requirements",
];

export type ImmigrationService = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Matching option in the visa enquiry form. */
  formService: VisaService;
  /** Extra boundary note shown with sensitive categories. */
  note?: string;
};

export const IMMIGRATION_SERVICES: ImmigrationService[] = [
  {
    id: "visa-migration",
    title: "Visa and Migration Assistance",
    description: "Guidance on visa and migration-related documentation matters.",
    icon: Route,
    formService: "Migration Documentation",
  },
  {
    id: "registration",
    title: "Registration Support",
    description: "Assistance understanding registration procedures and related documentation requirements.",
    icon: ClipboardList,
    formService: "Registration Support",
  },
  {
    id: "visa-extension",
    title: "Visa Extension Guidance",
    description: "Guidance on visa extension procedures where legally permitted.",
    icon: CalendarClock,
    formService: "Visa Extension Guidance",
  },
  {
    id: "entry-ban",
    title: "Entry Ban and Entry Refusal Case Assessment",
    description:
      "Initial information gathering and referral guidance for cases involving entry bans or refused entry.",
    icon: Ban,
    formService: "Entry Ban / Entry Refusal Enquiry",
    note: "We cannot overturn an entry ban or promise a favourable decision. These matters are decided by the relevant authorities, and complex cases are referred to qualified legal professionals.",
  },
  {
    id: "violations-fines",
    title: "Migration Violations and Administrative Fines",
    description:
      "Documentation assistance and guidance on seeking appropriate professional support for migration-related violations or administrative fines.",
    icon: FileWarning,
    formService: "Migration Documentation",
    note: "We do not represent clients before courts or authorities. Where legal representation is needed, we help you find a qualified professional.",
  },
  {
    id: "passport-documents",
    title: "Passport and Migration Documents",
    description: "Guidance on passport-related and migration documentation requirements.",
    icon: IdCard,
    formService: "Migration Documentation",
  },
  {
    id: "document-verification",
    title: "Document Verification",
    description:
      "Assistance reviewing documents for completeness and consistency. This is a practical review, not official or government verification.",
    icon: FileSearch,
    formService: "Document Verification",
  },
  {
    id: "residence",
    title: "Temporary and Permanent Residence Procedures",
    description:
      "General guidance on temporary and permanent residence procedures, subject to applicable laws and eligibility.",
    icon: House,
    formService: "Temporary / Permanent Residence Guidance",
  },
  {
    id: "authorities",
    title: "Communication with Russian Authorities",
    description:
      "Administrative assistance with communication and documentation, with referral to qualified legal professionals where necessary.",
    icon: MessagesSquare,
    formService: "Migration Documentation",
  },
];

/** Legal boundaries, shown in plain language next to the immigration services. */
export const LEGAL_BOUNDARIES = [
  "We do not guarantee visa issuance, extensions, residence permits or entry permission.",
  "We cannot remove entry bans or influence decisions made by government bodies.",
  "We do not give definitive legal conclusions. Complex matters are referred to qualified legal professionals.",
  "We are not a government agency, embassy, consulate, immigration authority or law firm.",
  "Outcomes depend on the relevant authorities and applicable law.",
];

/**
 * Visa service packages and prices, as supplied by the client.
 * Only list details the client has stated; leave `details` empty otherwise.
 */
export type VisaPackage = {
  id: string;
  title: string;
  details: string[];
  /** Service package price in Indian rupees. */
  priceInr: number;
};

export const BUSINESS_VISA_PACKAGES: VisaPackage[] = [
  {
    id: "business-1y-multiple",
    title: "1-Year Multiple-Entry Business Visa",
    details: ["For business professionals", "Includes embassy charges"],
    priceInr: 69999,
  },
  {
    id: "business-3m-single",
    title: "3-Month Single-Entry Business Visa",
    details: [],
    priceInr: 38000,
  },
];

export const TOURIST_VISA_PACKAGES: VisaPackage[] = [
  { id: "tourist-30d", title: "30-Day Tourist Visa", details: [], priceInr: 21000 },
  { id: "tourist-90d", title: "90-Day Tourist Visa", details: [], priceInr: 29000 },
];
