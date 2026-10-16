import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEnquiry } from "../../context/EnquiryContext";
import type { Service } from "../../data/services";

const toneStyles: Record<Service["tone"], { card: string; icon: string; title: string; body: string; link: string }> = {
  plain: {
    card: "border border-line bg-surface-raised",
    icon: "bg-brand-soft text-brand-ink",
    title: "",
    body: "text-muted",
    link: "text-brand-ink",
  },
  accent: {
    card: "border border-accent/25 bg-accent-soft",
    icon: "bg-accent text-navy",
    title: "",
    body: "text-ink",
    link: "text-accent-ink",
  },
  image: {
    card: "text-white",
    icon: "bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm",
    title: "text-white",
    body: "text-white/85",
    link: "text-white",
  },
  navy: {
    card: "bg-navy text-on-navy",
    icon: "bg-accent text-navy",
    title: "text-on-navy",
    body: "text-on-navy-muted",
    link: "text-on-navy",
  },
};

export function ServiceCard({ service }: { service: Service }) {
  const { prefillAdmission, prefillVisa } = useEnquiry();
  const s = toneStyles[service.tone];
  const Icon = service.icon;
  const { action } = service;
  const LinkIcon = action.external ? ArrowUpRight : ArrowRight;

  const onClick = () => {
    if (action.prefillAdmission) prefillAdmission(action.prefillAdmission);
    if (action.prefillVisa) prefillVisa(action.prefillVisa);
  };

  return (
    <article
      className={`group relative isolate flex h-full min-h-[260px] flex-col overflow-hidden rounded-2xl p-6 md:p-8 ${s.card} ${
        service.tone === "image" ? "min-h-[300px] justify-end" : ""
      }`}
    >
      {service.tone === "image" && service.image && (
        <>
          <img
            src={service.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 -z-20 size-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-navy/75 to-navy/15" aria-hidden="true" />
        </>
      )}
      {service.tone === "navy" && (
        <div
          className="absolute -top-24 -right-24 -z-10 size-72 rounded-full bg-brand/40 blur-3xl"
          aria-hidden="true"
        />
      )}

      <span className={`inline-flex size-12 items-center justify-center rounded-full ${s.icon}`}>
        <Icon className="size-[22px]" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 className={`mt-5 text-xl font-semibold tracking-tight ${s.title}`}>{service.title}</h3>
      <p className={`mt-3 max-w-[46ch] leading-relaxed ${s.body}`}>{service.description}</p>
      <div className="mt-auto pt-6">
        <a
          href={action.href}
          onClick={onClick}
          {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={`inline-flex min-h-11 items-center gap-1.5 font-semibold underline-offset-4 hover:underline ${s.link}`}
          aria-label={`${action.label}: ${service.title}${action.external ? " (opens WhatsApp)" : ""}`}
        >
          {action.label}
          <LinkIcon
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
            strokeWidth={2}
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
}
