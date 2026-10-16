import { BriefcaseBusiness } from "lucide-react";
import { BUSINESS_VISA_PACKAGES, BUSINESS_VISA_SERVICES } from "../../data/visaServices";
import { messages, whatsappUrl } from "../../utils/whatsapp";
import { VisaPanel } from "./VisaPanel";

export function BusinessVisa() {
  return (
    <VisaPanel
      id="business-visa"
      icon={BriefcaseBusiness}
      title="Russian business visa invitation support"
      description="Enquire about Russian business visa invitation support, invitation document processing assistance, and guidance on business visa application requirements."
      services={BUSINESS_VISA_SERVICES}
      packagesTitle="Business visa service packages"
      packages={BUSINESS_VISA_PACKAGES}
      ctaLabel="Enquire about business visa support"
      whatsappHref={whatsappUrl(messages.businessVisa())}
      note="Invitations and visas are issued by the relevant authorities. We cannot promise approval or a specific processing time."
    />
  );
}
