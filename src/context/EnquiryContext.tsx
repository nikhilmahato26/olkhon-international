import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { PreferredProgram, PreferredUniversity, VisaService } from "../data/options";

/**
 * Lets any CTA on the page prefill the admission or visa form before the
 * anchor link scrolls to it. `key` changes on every request so the form
 * re-applies the same prefill if the visitor clicks twice.
 */
export type AdmissionPrefill = {
  program?: PreferredProgram;
  university?: PreferredUniversity;
  intake?: string;
  key: number;
};

export type VisaPrefill = { service: VisaService; key: number };

type EnquiryContextValue = {
  admissionPrefill: AdmissionPrefill | null;
  visaPrefill: VisaPrefill | null;
  prefillAdmission: (p: Omit<AdmissionPrefill, "key">) => void;
  prefillVisa: (service: VisaService) => void;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [admissionPrefill, setAdmissionPrefill] = useState<AdmissionPrefill | null>(null);
  const [visaPrefill, setVisaPrefill] = useState<VisaPrefill | null>(null);

  const prefillAdmission = useCallback((p: Omit<AdmissionPrefill, "key">) => {
    setAdmissionPrefill({ ...p, key: Date.now() });
  }, []);

  const prefillVisa = useCallback((service: VisaService) => {
    setVisaPrefill({ service, key: Date.now() });
  }, []);

  const value = useMemo(
    () => ({ admissionPrefill, visaPrefill, prefillAdmission, prefillVisa }),
    [admissionPrefill, visaPrefill, prefillAdmission, prefillVisa],
  );

  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>;
}

export function useEnquiry(): EnquiryContextValue {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiry must be used inside <EnquiryProvider>");
  return ctx;
}
