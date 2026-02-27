import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const TEXTURE_IMAGE = "/images/duna-2.png";
const ARCH_IMAGE = "/images/duna-3.png";
const DECOR_IMAGE = "/images/duna-1.png";

export default function MaterialitySection() {
  return (
    <section className="py-32 bg-eggshell relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <RevealOnScroll className="relative z-10">
          <div className="bg-white p-12 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
            <h3 className="font-display text-5xl mb-6">Materiality & Form</h3>
            <p className="text-text-muted font-light leading-relaxed">
              We source rare stones and sustainable timbers, crafting textures
              that age beautifully with time. Our approach to materiality is one
              of reverence—letting the natural grain and vein dictate the flow
              of the space.
            </p>
          </div>
          <div className="absolute -top-24 -left-24 w-48 h-64 -z-10 hidden md:block opacity-50">
            <Image
              src={DECOR_IMAGE}
              alt=""
              width={192}
              height={256}
              className="w-full h-full object-cover grayscale opacity-40"
            />
          </div>
        </RevealOnScroll>
        <RevealOnScroll
          className="relative h-[600px]"
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="absolute top-0 right-0 w-5/6 h-4/5 z-0">
            <Image
              alt="Texture Detail"
              src={TEXTURE_IMAGE}
              fill
              className="object-cover shadow-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-3/5 h-3/5 z-10">
            <Image
              alt="Architecture Detail"
              src={ARCH_IMAGE}
              fill
              className="object-cover shadow-2xl border-8 border-eggshell"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
