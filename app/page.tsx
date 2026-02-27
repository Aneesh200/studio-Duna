import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import SelectedWorks from "@/components/SelectedWorks";
import MaterialitySection from "@/components/MaterialitySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-eggshell text-text-main">
      <Navbar />
      <HeroSection />
      <VisionSection />
      <SelectedWorks />
      <MaterialitySection />
      <CTASection />
      <Footer />
    </main>
  );
}
