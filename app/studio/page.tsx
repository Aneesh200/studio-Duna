import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudioContent from "@/components/StudioContent";

export const metadata = {
  title: "Duna Architects | Studio",
  description: "The Collection — Curated works from Duna Architects",
};

export default function StudioPage() {
  return (
    <main className="bg-eggshell text-text-main">
      <Navbar />
      <StudioContent />
      <Footer />
    </main>
  );
}
