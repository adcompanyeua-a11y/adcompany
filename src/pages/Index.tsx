import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
const Services = lazy(() => import("@/components/Services"));
const MethodVCP = lazy(() => import("@/components/MethodVCP"));
const PartnersMarquee = lazy(() => import("@/components/PartnersMarquee"));
const Process = lazy(() => import("@/components/Process"));
const VideoReviews = lazy(() => import("@/components/VideoReviews"));
const LeadsProof = lazy(() => import("@/components/LeadsProof"));
const Differentials = lazy(() => import("@/components/Differentials"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionDivider = () => (
  <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-brand-yellow/15 to-transparent" />
);

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SectionDivider />
      <ContactForm />
      <SectionDivider />
      <Suspense fallback={null}>
        <Services />
        <SectionDivider />
        <MethodVCP />
        <SectionDivider />
        <VideoReviews />
        <SectionDivider />
        <LeadsProof />
        <SectionDivider />
        <PartnersMarquee />
        <SectionDivider />
        <Process />
        <SectionDivider />
        <Differentials />
        <SectionDivider />
        <Footer />
      </Suspense>

    </main>
  );
};
export default Index;
