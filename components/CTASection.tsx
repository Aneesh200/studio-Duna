import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";

const BG_IMAGE = "/images/duna-9.png";

export default function CTASection() {
  return (
    <section id="contact" className="h-[80vh] relative flex items-center justify-center bg-background-dark dark:bg-dark-elevated text-white overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <Image
          alt="Background"
          src={BG_IMAGE}
          fill
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <div className="relative z-10 text-center max-w-4xl px-6">
        <RevealOnScroll>
          <h2 className="font-display text-6xl md:text-8xl mb-8 leading-none">
            Begin the Journey
          </h2>
        </RevealOnScroll>
        <RevealOnScroll style={{ transitionDelay: "0.1s" }}>
          <p className="text-white/60 text-lg font-light mb-12 max-w-xl mx-auto">
            Let us help you define your legacy through architecture.
          </p>
        </RevealOnScroll>
        <RevealOnScroll style={{ transitionDelay: "0.2s" }}>
          <Link
            href="/contact"
            className="inline-block border border-white/30 hover:bg-white hover:text-background-dark px-12 py-5 text-xs uppercase tracking-[0.25em] transition-all duration-500"
          >
            Inquire
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
