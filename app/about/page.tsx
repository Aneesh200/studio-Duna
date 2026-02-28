import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutContent from "@/components/AboutContent";

export const metadata = {
  title: "Duna Architects | About",
  description:
    "Origin & Vision — Architects of silence, space, and light. Crafting luxury environments for the discerning few.",
};

export default function AboutPage() {
  return (
    <main className="bg-eggshell dark:bg-dark-bg text-text-main dark:text-dark-text">
      <Navbar />
      <AboutContent />
      <Footer />
    </main>
  );
}
