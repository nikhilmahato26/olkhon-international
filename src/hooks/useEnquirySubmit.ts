import { useCallback, useState } from "react";
import { openWhatsApp } from "../utils/whatsapp";

export type EnquiryResult = { message: string; popupBlocked: boolean };

/**
 * Hands a validated enquiry to WhatsApp and keeps the composed message so the
 * success panel can offer a manual WhatsApp link and an email fallback.
 * Nothing is stored or sent to a server.
 */
export function useEnquirySubmit() {
  const [result, setResult] = useState<EnquiryResult | null>(null);

  const send = useCallback((message: string) => {
    const opened = openWhatsApp(message);
    setResult({ message, popupBlocked: !opened });
  }, []);

  const reset = useCallback(() => setResult(null), []);

  return { result, send, reset };
}
