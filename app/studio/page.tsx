import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudioContent from "@/components/StudioContent";

export const metadata = {
  title: "Duna Architects | Studio",
  description: "The Collection — Curated works from Duna Architects",
};

export default function StudioPage() {
  return (
    <main className="bg-eggshell dark:bg-dark-bg text-text-main dark:text-dark-text">
      <Navbar />
      <StudioContent />
      <Footer />
    </main>
  );
}
