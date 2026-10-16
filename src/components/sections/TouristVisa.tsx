import { Ticket } from "lucide-react";
import { TOURIST_VISA_PACKAGES, TOURIST_VISA_SERVICES } from "../../data/visaServices";
import { messages, whatsappUrl } from "../../utils/whatsapp";
import { VisaPanel } from "./VisaPanel";

export function TouristVisa() {
  return (
    <VisaPanel
      id="tourist-visa"
      icon={Ticket}
      title="Russian tourist voucher & visa support"
      description="Get guidance on Russian tourist voucher documentation, tourist confirmation requirements, and the supporting documents that may be needed for a tourist visa application."
      services={TOURIST_VISA_SERVICES}
      packagesTitle="Tourist visa service packages"
      packages={TOURIST_VISA_PACKAGES}
      ctaLabel="Enquire about tourist visa support"
      whatsappHref={whatsappUrl(messages.touristVisa())}
      note="Tourist documentation supports your application but does not guarantee a visa. The decision rests with the issuing authority."
      delay={0.08}
    />
  );
}
