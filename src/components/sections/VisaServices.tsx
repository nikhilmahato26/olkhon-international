import { Info } from "lucide-react";
import redSquareNight from "../../assets/images/moscow-red-square-night.webp";
import { SCOPE_CATEGORIES } from "../../data/visaServices";
import { Reveal } from "../ui/Reveal";
import { BusinessVisa } from "./BusinessVisa";
import { ImmigrationAssistance } from "./ImmigrationAssistance";
import { TouristVisa } from "./TouristVisa";

/**
 * The visa and legal cluster. Deliberately set on navy so it reads as a
 * separate service line from student admissions.
 */
export function VisaServices() {
  return (
    <section
      id="visa-services"
      aria-labelledby="visa-title"
      className="section-pad relative overflow-hidden border-y border-navy-line bg-navy text-on-navy"
    >
      <div className="container-page">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
              For travellers and foreign citizens
            </p>
            <h2
              id="visa-title"
              className="text-3xl leading-[1.1] font-semibold tracking-tight text-on-navy md:text-4xl lg:text-5xl"
            >
              Russia visa &amp; legal assistance services
            </h2>
            <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-on-navy-muted md:text-lg">
              Olkhon International Consultants Pvt Ltd assists foreign citizens with Russian visa, migration, and
              related documentation matters through guidance, document support, and referrals to qualified
              professionals where required.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="aspect-16/10 overflow-hidden rounded-2xl ring-1 ring-white/10 lg:aspect-4/3">
              <img
                src={redSquareNight}
                alt="Saint Basil's Cathedral lit up at night on Red Square, Moscow"
                width={1100}
                height={1650}
                loading="lazy"
                decoding="async"
                className="size-full object-cover object-[50%_35%]"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-14">
          <h3 className="text-lg font-semibold text-on-navy">How our assistance is scoped</h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SCOPE_CATEGORIES.map(({ title, description, icon: Icon, referral }, i) => (
              <Reveal
                as="li"
                key={title}
                delay={i * 0.06}
                className={`flex flex-col rounded-2xl p-6 ${
                  referral ? "border border-dashed border-accent/60 bg-transparent" : "bg-navy-raised"
                }`}
              >
                <span
                  className={`inline-flex size-11 items-center justify-center rounded-full ${
                    referral ? "bg-accent text-navy" : "bg-white/10 text-accent"
                  }`}
                >
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <p className="mt-4 font-semibold text-on-navy">{title}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-on-navy-muted">{description}</p>
                {referral && (
                  <p className="mt-auto pt-4 text-sm font-semibold text-accent">By referral only</p>
                )}
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <BusinessVisa />
          <TouristVisa />
        </div>
        <p className="mt-6 flex max-w-[90ch] items-start gap-2 text-sm leading-relaxed text-on-navy-muted">
          <Info className="mt-0.5 size-4 shrink-0" strokeWidth={2} aria-hidden="true" />
          Prices are Olkhon International service package fees in Indian rupees (INR). Please confirm what each
          package includes, and the documents required, with our team before you proceed.
        </p>

        <ImmigrationAssistance />
      </div>
    </section>
  );
}
