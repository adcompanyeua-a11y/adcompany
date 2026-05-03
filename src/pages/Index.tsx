import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import VideoReviews from "@/components/VideoReviews";
import Differentials from "@/components/Differentials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <VideoReviews />
      <Differentials />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
