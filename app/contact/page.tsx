import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactContent from "@/components/ContactContent";

export const metadata = {
  title: "Duna Architects | Contact",
  description: "Get in touch with Duna Architects — inquiries, collaborations, and new projects",
};

export default function ContactPage() {
  return (
    <main className="bg-eggshell text-text-main">
      <Navbar />
      <ContactContent />
      <Footer />
    </main>
  );
}
