import { Helmet } from "react-helmet-async";
import { business } from "../../config/business";
import { BUSINESS_VISA_PACKAGES, TOURIST_VISA_PACKAGES } from "../../data/visaServices";

const TITLE = "Olkhon International Consultants | Study in Russia & Visa Assistance";
const DESCRIPTION =
  "Olkhon International Consultants Pvt Ltd assists with Russian university admission enquiries, Synergy University admission support, study abroad guidance, Russian visa invitations, migration documentation, and international travel services.";
const KEYWORDS = [
  "Olkhon International Consultants",
  "study in Russia from India",
  "Russian university admission consultancy",
  "Synergy University admission assistance",
  "Russia student visa assistance",
  "Russia business visa invitation",
  "Russian tourist voucher assistance",
  "Russian visa documentation support",
  "Russian immigration consultancy",
  "Russian language courses",
  "document translation notarization attestation for students",
  "study abroad consultancy Malappuram",
  "Russian visa services Kerala",
  "education agent partnership Russia",
].join(", ");

/**
 * Organization + LocalBusiness structured data. Only supplied facts:
 * no street address, ratings, reviews, opening hours or affiliations.
 */
function structuredData() {
  const url = business.siteUrl || undefined;
  const address = {
    "@type": "PostalAddress",
    addressLocality: business.location.city,
    addressRegion: business.location.region,
    addressCountry: business.location.countryCode,
  };
  const contactPoint = [
    {
      "@type": "ContactPoint",
      telephone: business.primaryPhone.e164,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      telephone: business.additionalPhone.e164,
      contactType: "customer service",
      areaServed: "RU",
    },
  ];
  const services = [
    "Study abroad consultancy",
    "Russian university admission assistance",
    "Student visa assistance",
    "Translation, notarization and attestation assistance for students",
    "Russian visa invitation and documentation support",
    "Immigration consultancy",
    "International travel services",
    "B2B agent partnerships",
  ];

  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: business.displayName,
      legalName: business.name,
      ...(url ? { url, logo: `${url}/olkhon-logo.png` } : {}),
      email: business.email,
      telephone: business.primaryPhone.e164,
      address,
      contactPoint,
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: business.displayName,
      ...(url ? { url, image: `${url}/olkhon-logo.png` } : {}),
      email: business.email,
      telephone: [business.primaryPhone.e164, business.additionalPhone.e164],
      address,
      areaServed: ["India", "Russia", "GCC", "Africa", "Europe"],
      knowsAbout: services,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Russia visa service packages",
        itemListElement: [...BUSINESS_VISA_PACKAGES, ...TOURIST_VISA_PACKAGES].map((pkg) => ({
          "@type": "Offer",
          name: pkg.title,
          price: String(pkg.priceInr),
          priceCurrency: "INR",
          itemOffered: { "@type": "Service", name: `${pkg.title} service package` },
        })),
      },
    },
  ];
}

export function Seo() {
  const url = business.siteUrl;
  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta name="keywords" content={KEYWORDS} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={business.displayName} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      {url && <link rel="canonical" href={`${url}/`} />}
      {url && <meta property="og:url" content={`${url}/`} />}
      {url && <meta property="og:image" content={`${url}/olkhon-logo.png`} />}
      <script type="application/ld+json">{JSON.stringify(structuredData())}</script>
    </Helmet>
  );
}
