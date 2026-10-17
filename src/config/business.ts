/**
 * Central business configuration.
 * Every contact detail on the site reads from here. Edit this file only.
 */
export const business = {
  name: "OLKHON INTERNATIONAL CONSULTANTS PVT LTD",
  displayName: "Olkhon International Consultants Pvt Ltd",
  shortName: "Olkhon International",
  tagline: "Your gateway to education and opportunities in Russia",
  logoTagline: "Your Better Choice",

  primaryPhone: {
    label: "+91 9746522897",
    uri: "tel:+919746522897",
    e164: "+919746522897",
    region: "India",
  },
  additionalPhone: {
    label: "+7 925 586-6107",
    uri: "tel:+79255866107",
    e164: "+79255866107",
    region: "Russia",
  },
  email: "olkhoninternational@gmail.com",
  /** WhatsApp runs on the primary Indian number only. */
  whatsappUrl: "https://wa.me/919746522897",

  location: {
    city: "Malappuram",
    region: "Kerala",
    country: "India",
    countryCode: "IN",
    label: "Malappuram, Kerala, India",
    /** General city search only. No street address has been supplied. */
    mapEmbedUrl: "https://www.google.com/maps?q=Malappuram,+Kerala,+India&output=embed",
  },

  /** Only experience figure the client has approved for publication. */
  experienceYears: "10+",
  /** Regions served, as stated by the client. Russia is the specialism. */
  regionsServed: ["Russia", "GCC", "Africa", "Europe", "Other global destinations"],

  universityFocus: "Synergy University",
  studyDestination: "Russia",

  /**
   * Public site URL. Leave empty until the domain is live; canonical and
   * Open Graph URLs are only rendered once this is set.
   */
  siteUrl: "",
} as const;

/**
 * Synergy University authorization.
 * The business states it is an officially authorized agency. When the client
 * supplies proof (certificate scan, letter), import the image and set it here;
 * the Synergy section will render it automatically.
 */
export const synergyAuthorization: {
  statement: string;
  proofImage: string | null;
  proofCaption: string;
} = {
  statement:
    "Olkhon International Consultants Pvt Ltd states that it is an officially authorized agency for Synergy University.",
  proofImage: null,
  proofCaption: "",
};
