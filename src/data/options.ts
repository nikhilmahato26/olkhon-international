/** Dropdown options shared by forms, prefill actions and WhatsApp messages. */

export const EDUCATION_LEVELS = [
  "Secondary School",
  "Higher Secondary",
  "Diploma",
  "Bachelor's Degree",
  "Master's Degree",
  "Other",
] as const;

export const PREFERRED_PROGRAMS = [
  "BBA",
  "Other Undergraduate Program",
  "Diploma Course",
  "Preparatory Course",
  "Russian Language Course",
  "Not Decided",
] as const;

export const PREFERRED_UNIVERSITIES = [
  "Synergy University",
  "Other Russian University",
  "Need Guidance",
] as const;

export const VISA_SERVICES = [
  "Business Visa Invitation",
  "Tourist Voucher",
  "Tourist Visa Documentation",
  "Student Visa Assistance",
  "Translation, Notarization & Attestation",
  "Registration Support",
  "Visa Extension Guidance",
  "Entry Ban / Entry Refusal Enquiry",
  "Migration Documentation",
  "Temporary / Permanent Residence Guidance",
  "Document Verification",
  "Other",
] as const;

export const PARTNERSHIP_INTERESTS = [
  "Education Agent Cooperation",
  "Student Admission Coordination",
  "Russia-Focused Education Services",
  "International Travel Cooperation",
  "Other",
] as const;

export type EducationLevel = (typeof EDUCATION_LEVELS)[number];
export type PreferredProgram = (typeof PREFERRED_PROGRAMS)[number];
export type PreferredUniversity = (typeof PREFERRED_UNIVERSITIES)[number];
export type VisaService = (typeof VISA_SERVICES)[number];
export type PartnershipInterest = (typeof PARTNERSHIP_INTERESTS)[number];
