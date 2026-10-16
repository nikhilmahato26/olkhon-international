import { business } from "../config/business";

const GREETING = `Hello ${business.displayName},`;

/** Builds a wa.me link for the primary number with an optional URL-encoded message. */
export function whatsappUrl(message?: string): string {
  return message ? `${business.whatsappUrl}?text=${encodeURIComponent(message)}` : business.whatsappUrl;
}

const value = (v?: string | null) => (v && v.trim() ? v.trim() : "Not specified");

/** Contact lines appended to form-generated messages. */
function contactBlock(c: { name?: string; phone?: string; email?: string }): string {
  const lines = [`Name: ${value(c.name)}`];
  if (c.phone) lines.push(`Phone: ${c.phone.trim()}`);
  if (c.email) lines.push(`Email: ${c.email.trim()}`);
  return lines.join("\n");
}

export const messages = {
  general: (details?: { name?: string; phone?: string; message?: string }) => {
    const base = `${GREETING} I would like to enquire about your services. Please contact me with further details.`;
    if (!details) return base;
    return [base, "", contactBlock(details), details.message ? `\nMessage:\n${details.message.trim()}` : ""]
      .join("\n")
      .trim();
  },

  admission: (d: {
    name?: string;
    phone?: string;
    email?: string;
    country?: string;
    program?: string;
    university?: string;
    education?: string;
    intake?: string;
    message?: string;
  }) =>
    [
      `${GREETING} I would like to enquire about studying in Russia.`,
      "",
      contactBlock(d),
      `Current Country: ${value(d.country)}`,
      "",
      `Preferred Program: ${value(d.program)}`,
      `Preferred University: ${value(d.university)}`,
      `Highest Education: ${value(d.education)}`,
      `Intended Intake: ${value(d.intake)}`,
      d.message ? `\nMessage:\n${d.message.trim()}` : "",
      "",
      "Please share the admission requirements and next steps.",
    ].join("\n"),

  synergy: () =>
    `${GREETING} I would like to enquire about admission opportunities at Synergy University. Please share the available programs, requirements, and application process.`,

  synergyIntake: (title: string) =>
    `${GREETING} I would like to enquire about the Synergy University ${title} intake. Please share the requirements, fees and application process.`,

  synergyAuthorization: () =>
    `${GREETING} Could you please share a copy of your Synergy University authorization documentation?`,

  visa: (d: { name?: string; phone?: string; email?: string; service?: string; country?: string; description?: string }) =>
    [
      `${GREETING} I would like to enquire about Russian visa and documentation assistance.`,
      "",
      contactBlock(d),
      "",
      `Service Required: ${value(d.service)}`,
      `Current Country: ${value(d.country)}`,
      `Brief Description: ${value(d.description)}`,
      "",
      "Please contact me regarding the requirements.",
    ].join("\n"),

  businessVisa: () =>
    `${GREETING} I would like to enquire about Russian business visa invitation support and the required documentation.`,

  touristVisa: () =>
    `${GREETING} I would like to enquire about Russian tourist voucher and tourist visa support, and the required documentation.`,

  translation: () =>
    `${GREETING} I would like to enquire about translation, notarization and attestation assistance for my student documents. Please share the requirements and next steps.`,

  travel: () =>
    `${GREETING} I would like to enquire about international travel services for my education or travel plans. Please contact me with further details.`,

  b2b: (d: {
    name?: string;
    phone?: string;
    email?: string;
    organization?: string;
    country?: string;
    interest?: string;
    message?: string;
  }) =>
    [
      `${GREETING} I am interested in discussing a potential B2B partnership.`,
      "",
      contactBlock(d),
      "",
      `Organization: ${value(d.organization)}`,
      `Country: ${value(d.country)}`,
      `Partnership Interest: ${value(d.interest)}`,
      d.message ? `\nMessage:\n${d.message.trim()}` : "",
      "",
      "Please share the next steps.",
    ].join("\n"),
};

/**
 * Opens WhatsApp in a new tab. Returns false when the browser blocked the
 * popup, so the caller can point the visitor to the manual link.
 */
export function openWhatsApp(message: string): boolean {
  // "noopener" in the features string makes window.open return null even on
  // success, so detach the opener manually to keep the blocked signal.
  const win = window.open(whatsappUrl(message), "_blank");
  if (win) win.opener = null;
  return win !== null;
}
