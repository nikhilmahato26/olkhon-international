import { siWhatsapp } from "simple-icons";

/** WhatsApp glyph from the Simple Icons library. */
export function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg role="img" aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d={siWhatsapp.path} />
    </svg>
  );
}
