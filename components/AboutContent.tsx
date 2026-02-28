"use client";

import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE = "/images/duna-4.png";
const TEXTURE_IMAGE = "/images/duna-9.png";
const QUOTE_IMAGE = "/images/duna-5.png";

const TEAM = [
  {
    name: "Priyanka Vemisetty",
    role: "Founder & Principal Architect",
    image: "/images/founder.png",
  },
];

const PROCESS = [
  {
    icon: "person_search",
    title: "01. Discovery",
    description:
      "We begin by understanding the land and the lifestyle. Deep analysis of site conditions and client aspirations forms the foundation.",
  },
  {
    icon: "architecture",
    title: "02. Concept",
    description:
      "Sketching initial forms. Exploring volumes, light paths, and material palettes to define the project's soul.",
  },
  {
    icon: "draw",
    title: "03. Detail",
    description:
      "Rigorous technical design. Every joinery, every fixture is selected or custom-designed to ensure cohesive beauty.",
  },
  {
    icon: "foundation",
    title: "04. Realization",
    description:
      "Overseeing construction with an artisan's eye, ensuring the built reality surpasses the imagined potential.",
  },
];

export default function AboutContent() {
  return (
    <>
      <header className="relative h-[90vh] w-full overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Artistic portrait of Duna founders in a minimalist architectural setting"
            src={HERO_IMAGE}
            fill
            className="object-cover animate-slow-zoom"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <p
            className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase mb-6 opacity-0 animate-fade-in-up drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            The Architects
          </p>
          <h1
            className="font-display text-6xl md:text-8xl lg:text-9xl leading-none font-light opacity-0 animate-fade-in-up [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]"
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            Origin & <i className="font-serif italic text-white">Vision</i>
          </h1>
        </div>
        <div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0 animate-fade-in"
          style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}
        >
          <span className="material-symbols-outlined text-4xl text-white font-thin">
            keyboard_arrow_down
          </span>
        </div>
      </header>

      <section className="py-24 md:py-32 px-6 md:px-12 bg-eggshell dark:bg-dark-bg">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
            <div className="md:col-span-4 lg:col-span-3">
              <span className="inline-block w-16 h-[1px] bg-primary mb-6" />
              <h2 className="font-display text-4xl md:text-5xl text-text-main dark:text-dark-text mb-8 leading-tight">
                Form, Emotion,
                <br />
                Timeless Aesthetics.
              </h2>
            </div>
            <div className="md:col-span-8 lg:col-span-6 space-y-8 text-lg md:text-xl font-light leading-relaxed text-text-muted dark:text-dark-muted">
              <p>
                <span className="text-text-main dark:text-dark-text font-normal">
                  Duna was born from a singular obsession:
                </span>{" "}
                to create spaces that silence the noise of the world. We believe
                that architecture is not merely about shelter, but about the
                profound emotional resonance of space.
              </p>
              <p>
                Our practice is rooted in a deep respect for context. We do not
                impose; we listen. We listen to the landscape, the light, and
                the unspoken desires of those who will inhabit our creations.
                Each project is a dialogue between the raw elements of nature
                and the refined precision of modern design.
              </p>
              <p>
                We strip away the non-essential until only the truth of the
                structure remains. It is in this reduction that we find
                luxury—not in opulence, but in clarity, in the play of shadows
                across a limestone wall, and in the seamless transition between
                inside and out.
              </p>
            </div>
            <div className="md:col-span-12 lg:col-span-3 flex flex-col justify-end">
              <div className="relative w-full h-80 overflow-hidden rounded-sm">
                <Image
                  alt="Detail of minimalist texture"
                  src={TEXTURE_IMAGE}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
              <p className="mt-4 text-xs uppercase tracking-widest text-text-muted dark:text-dark-muted text-right">
                Texture & Light Study No. 4
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 md:mb-24">
            <h3 className="font-display text-5xl md:text-7xl text-text-main">
              The <i className="italic text-primary">Founder</i>
            </h3>
            <p className="max-w-md text-text-muted mt-6 md:mt-0 text-sm leading-relaxed">
              Architect and founder of Duna, driven by a shared philosophy of
              quiet luxury and timeless design.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              {TEAM.map((member) => (
                <div key={member.name} className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[3/4] mb-6">
                  <Image
                    alt={`Portrait of ${member.name}`}
                    src={member.image}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h4 className="font-display text-2xl text-text-main group-hover:text-primary transition-colors">
                  {member.name}
                </h4>
                <p className="text-xs tracking-[0.2em] uppercase text-text-muted mt-2">
                  {member.role}
                </p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-eggshell text-text-main">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-4">
              How we work
            </p>
            <h3 className="font-display text-4xl md:text-6xl">The Process</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 border-t border-text-muted/20 divide-y md:divide-y-0 md:divide-x divide-text-muted/20">
            {PROCESS.map((step) => (
              <div
                key={step.title}
                className="p-8 md:p-10 group hover:bg-white transition-colors duration-500"
              >
                <div className="w-12 h-12 mb-6 text-primary flex items-center justify-center border border-primary/30 rounded-full group-hover:border-primary transition-colors">
                  <span className="material-symbols-outlined font-thin">
                    {step.icon}
                  </span>
                </div>
                <h4 className="font-display text-2xl mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  {step.title}
                </h4>
                <p className="text-sm text-text-muted leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          alt="Architectural backdrop"
          src={QUOTE_IMAGE}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center max-w-2xl px-6">
          <span className="material-symbols-outlined text-5xl text-white/80 mb-6 font-thin block">
            spa
          </span>
          <p className="font-display text-4xl md:text-5xl text-white leading-tight italic">
            &ldquo;Architecture should speak of its time and place, but yearn
            for timelessness.&rdquo;
          </p>
          <p className="text-white/80 text-xs uppercase tracking-widest mt-8 font-sans">
            — Frank Gehry
          </p>
        </div>
      </div>

      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-4xl md:text-6xl text-text-main mb-6">
            Start Your Journey
          </h2>
          <p className="text-text-muted mb-10 font-light">
            Whether you are looking to build a private residence or a boutique
            commercial space, let&apos;s discuss how we can bring your vision to
            life.
          </p>
          <Link
            href="/contact"
            className="inline-block border-2 border-text-main text-text-main hover:bg-primary hover:border-primary hover:text-white px-12 py-5 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300"
          >
            Contact Studio
          </Link>
        </div>
      </section>
    </>
  );
}
