import { ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useId, useState, type ReactNode } from "react";

export type AccordionItem = { id: string; title: string; icon?: LucideIcon; content: ReactNode };

/** Disclosure list for the navy visa band. Several panels may be open at once. */
export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<Set<string>>(() => new Set());
  const reduce = useReducedMotion();
  const baseId = useId();

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => {
        const isOpen = open.has(item.id);
        const buttonId = `${baseId}-${item.id}-button`;
        const panelId = `${baseId}-${item.id}-panel`;
        const Icon = item.icon;
        return (
          <li
            key={item.id}
            className={`rounded-2xl border transition-colors duration-200 ${
              isOpen ? "border-white/25 bg-navy-raised" : "border-navy-line bg-navy-raised/50 hover:border-white/25"
            }`}
          >
            <h4>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="flex min-h-16 w-full items-center gap-4 px-5 py-4 text-left text-base font-semibold text-on-navy md:px-6"
              >
                {Icon && (
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent">
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                )}
                <span className="flex-1">{item.title}</span>
                <ChevronDown
                  className={`size-5 shrink-0 text-on-navy-muted transition-transform duration-300 motion-reduce:transition-none ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </button>
            </h4>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reduce ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={reduce ? { opacity: 0, height: 0, transition: { duration: 0 } } : { opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-6 md:px-6 md:pl-[5.5rem]">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
