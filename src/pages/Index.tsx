import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
const Services = lazy(() => import("@/components/Services"));
const PartnersMarquee = lazy(() => import("@/components/PartnersMarquee"));
const Process = lazy(() => import("@/components/Process"));
const VideoReviews = lazy(() => import("@/components/VideoReviews"));
const LeadsProof = lazy(() => import("@/components/LeadsProof"));
const Differentials = lazy(() => import("@/components/Differentials"));
const ContactForm = lazy(() => import("@/components/ContactForm"));
const Footer = lazy(() => import("@/components/Footer"));
const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <Services />
        <VideoReviews />
        <LeadsProof />
        <PartnersMarquee />
        <Process />
        <Differentials />
        <ContactForm />
        <Footer />
      </Suspense>
    </main>
  );
};
export default Index;
