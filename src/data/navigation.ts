export type NavItem = {
  label: string;
  /** Compact label for the single-line desktop bar. */
  shortLabel: string;
  href: string;
  id: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", shortLabel: "Home", href: "/#top", id: "top" },
  { label: "Study in Russia", shortLabel: "Study in Russia", href: "/#study-in-russia", id: "study-in-russia" },
  { label: "Synergy University", shortLabel: "Synergy University", href: "/#synergy-university", id: "synergy-university" },
  { label: "Our Services", shortLabel: "Services", href: "/#services", id: "services" },
  { label: "Russia Visa Services", shortLabel: "Visa Services", href: "/#visa-services", id: "visa-services" },
  { label: "B2B Partnerships", shortLabel: "B2B Partners", href: "/#b2b-partnerships", id: "b2b-partnerships" },
  { label: "Contact", shortLabel: "Contact", href: "/#contact", id: "contact" },
];

/**
 * Maps every page section to the nav item it belongs to, so the active
 * indicator follows the visitor. null clears the indicator.
 */
export const SECTION_TO_NAV: Record<string, string | null> = {
  top: "top",
  "study-in-russia": "study-in-russia",
  programs: "study-in-russia",
  "synergy-university": "synergy-university",
  services: "services",
  "translation-attestation": "services",
  "visa-services": "visa-services",
  approach: "visa-services",
  "b2b-partnerships": "b2b-partnerships",
  apply: null,
  "visa-enquiry": "visa-services",
  about: null,
  contact: "contact",
};

/** Section anchors used by CTAs. Keep in sync with section ids. */
export const ANCHORS = {
  top: "/#top",
  studyInRussia: "/#study-in-russia",
  programs: "/#programs",
  synergy: "/#synergy-university",
  services: "/#services",
  translation: "/#translation-attestation",
  visaServices: "/#visa-services",
  businessVisa: "/#business-visa",
  touristVisa: "/#tourist-visa",
  immigration: "/#immigration-assistance",
  approach: "/#approach",
  b2b: "/#b2b-partnerships",
  apply: "/#apply",
  visaEnquiry: "/#visa-enquiry",
  about: "/#about",
  contact: "/#contact",
} as const;
