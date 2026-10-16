import { motion, useReducedMotion } from "motion/react";
import { messages, whatsappUrl } from "../../utils/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

/** Floating WhatsApp button for desktop. Mobile uses the bottom action bar instead. */
export function WhatsAppButton() {
  const reduce = useReducedMotion();
  return (
    <motion.a
      href={whatsappUrl(messages.general())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Olkhon International (opens in a new tab)"
      initial={reduce ? false : { opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      className="group fixed right-6 bottom-6 z-30 hidden items-center gap-3 rounded-full bg-whatsapp py-3.5 pr-5 pl-4 font-semibold text-white shadow-lift transition-[filter,transform] duration-200 hover:-translate-y-0.5 hover:brightness-110 motion-reduce:transform-none lg:inline-flex"
    >
      <WhatsAppIcon className="size-6" />
      <span className="text-[15px]">WhatsApp us</span>
    </motion.a>
  );
}
