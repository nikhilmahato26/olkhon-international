import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { MobileBottomBar } from "./components/layout/MobileBottomBar";
import { Navbar } from "./components/layout/Navbar";
import { TopBar } from "./components/layout/TopBar";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";
import { EnquiryProvider } from "./context/EnquiryContext";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <HelmetProvider>
      {/* domAnimation covers fades, springs, exit and in-view; no layout animations are used. */}
      <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <EnquiryProvider>
            <a
              href="#main"
              className="sr-only z-50 rounded-full bg-brand px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
            >
              Skip to content
            </a>
            {/* Bottom padding on small screens keeps content clear of the fixed action bar. */}
            <div className="flex min-h-dvh flex-col pb-[calc(4rem+env(safe-area-inset-bottom))] lg:pb-0">
              <TopBar />
              <Navbar />
              <main id="main" className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
            <WhatsAppButton />
            <MobileBottomBar />
          </EnquiryProvider>
        </BrowserRouter>
      </MotionConfig>
      </LazyMotion>
    </HelmetProvider>
  );
}
