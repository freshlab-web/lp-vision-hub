import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import SectorsSection from "@/components/SectorsSection";
import ProcessSection from "@/components/ProcessSection";
import VideoSection from "@/components/VideoSection";
import BenefitsSection from "@/components/BenefitsSection";
import WhyHorusSection from "@/components/WhyHorusSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <SolutionSection />
      <SectorsSection />
      <ProcessSection />
      <VideoSection />
      <BenefitsSection />
      <WhyHorusSection />
      <Footer />
    </main>
  );
};

export default Index;
