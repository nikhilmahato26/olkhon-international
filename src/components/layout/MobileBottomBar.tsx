import { FileText, Phone } from "lucide-react";
import { business } from "../../config/business";
import { ANCHORS } from "../../data/navigation";
import { messages, whatsappUrl } from "../../utils/whatsapp";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

/**
 * Fixed Call / WhatsApp / Apply bar for small screens. The app shell adds
 * matching bottom padding so the bar never covers content or form fields.
 */
export function MobileBottomBar() {
  const item =
    "flex min-h-16 flex-col items-center justify-center gap-1 text-[12.5px] font-semibold transition-colors active:scale-[0.97] motion-reduce:transform-none";
  return (
    <nav
      aria-label="Quick contact"
      className="pb-safe fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 backdrop-blur-md lg:hidden"
    >
      <div className="grid grid-cols-3">
        <a href={business.primaryPhone.uri} className={`${item} text-ink-strong`}>
          <Phone className="size-5 text-brand-ink" strokeWidth={1.75} aria-hidden="true" />
          Call
        </a>
        <a
          href={whatsappUrl(messages.general())}
          target="_blank"
          rel="noopener noreferrer"
          className={`${item} text-ink-strong`}
          aria-label="WhatsApp (opens in a new tab)"
        >
          <WhatsAppIcon className="size-5 text-whatsapp" />
          WhatsApp
        </a>
        <a href={ANCHORS.apply} className={`${item} bg-brand text-white`}>
          <FileText className="size-5" strokeWidth={1.75} aria-hidden="true" />
          Apply
        </a>
      </div>
    </nav>
  );
}
