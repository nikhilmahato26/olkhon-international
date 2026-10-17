import { Seo } from "../components/seo/Seo";
import { About } from "../components/sections/About";
import { AdmissionForm } from "../components/sections/AdmissionForm";
import { B2BPartnerships } from "../components/sections/B2BPartnerships";
import { Contact } from "../components/sections/Contact";
import { Hero } from "../components/sections/Hero";
import { ServiceApproach } from "../components/sections/ServiceApproach";
import { Services } from "../components/sections/Services";
import { StudyInRussia } from "../components/sections/StudyInRussia";
import { StudyPrograms } from "../components/sections/StudyPrograms";
import { SynergyUniversity } from "../components/sections/SynergyUniversity";
import { TranslationAttestation } from "../components/sections/TranslationAttestation";
import { VisaEnquiryForm } from "../components/sections/VisaEnquiryForm";
import { VisaServices } from "../components/sections/VisaServices";
import { useHashScroll } from "../hooks/useHashScroll";

export function Home() {
  useHashScroll();
  return (
    <>
      <Seo />
      <Hero />
      {/* Company introduction directly under the hero. */}
      <About />
      <StudyInRussia />
      <StudyPrograms />
      <SynergyUniversity />
      <Services />
      <TranslationAttestation />
      {/* Business visa, tourist voucher and immigration assistance live inside this band. */}
      <VisaServices />
      <ServiceApproach />
      <B2BPartnerships />
      <AdmissionForm />
      <VisaEnquiryForm />
      <Contact />
    </>
  );
}
