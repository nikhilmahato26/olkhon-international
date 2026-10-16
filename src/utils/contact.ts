import { business } from "../config/business";

/** mailto: link to the business inbox with an encoded subject and body. */
export function mailtoUrl(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  // URLSearchParams encodes spaces as "+", which some mail clients show literally.
  const query = params.toString().replace(/\+/g, "%20");
  return `mailto:${business.email}${query ? `?${query}` : ""}`;
}
