import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import LoveStorySection from "@/components/LoveStorySection";
import EventsSection from "@/components/EventsSection";
import DetailsSection from "@/components/DetailsSection";
import RegistrySection from "@/components/RegistrySection";
import RSVPSection from "@/components/RSVPSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navigation />
    <HeroSection />
    <CountdownSection />
    {/* <LoveStorySection /> */}
    <EventsSection />
    <DetailsSection />
    <RegistrySection />
    <RSVPSection />
    <FAQSection />
    <Footer />
  </div>
);

export default Index;
