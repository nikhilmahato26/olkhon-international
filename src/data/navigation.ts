export type NavItem = { label: string; href: string; id: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/#top", id: "top" },
  { label: "Study in Russia", href: "/#study-in-russia", id: "study-in-russia" },
  { label: "Synergy University", href: "/#synergy-university", id: "synergy-university" },
  { label: "Our Services", href: "/#services", id: "services" },
  { label: "Russia Visa Services", href: "/#visa-services", id: "visa-services" },
  { label: "B2B Partnerships", href: "/#b2b-partnerships", id: "b2b-partnerships" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

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
