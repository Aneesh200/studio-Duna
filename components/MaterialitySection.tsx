import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const TEXTURE_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBkYBOet83EH2yCukxJPq4SjPtllXkYUO6yKKmTh5CCUP14gh_JdaBP3VucSxmXzywxztMNbVqEfUgS19Lg17e3BKMqmrigm2xb-I4jhA5DRdMtqtpBm39Au3ak4tAijhfOfepbpAd6DwLa8RgakceCRD4ft-wUep4Y-Vm3Cs5-ua54yneutm3GZUl9haw1SiUUFR_cvSwJxyaUEX3Pp8bCeG-DFLsEo6psvWvqHxvKw7T6jKjtq1kMOf0sQ9dGkvO8RKbqNDLrPep6";
const ARCH_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDE-ktWGq6Jsjr-bOqaReTb-VwVcrBe-H3EeQvefJDMOSwJVZiIR7hS6itI1OC85ljyDnauisConRfLu1i2O1m6e5sKigZMSWR26heJZJLHa7o1SEbmMfrXvEKsOYV0xOSuoRuvWoDA5Mf2RZdd4vrxlM9vAj5ibeDDV16q-4DAYquzm_gCJddG6hwFkEwmLW1sJUW-WuTub8u0h-_2McnJ5sirKw0eYnLgXReZg4LF8qj0g4UWJMx82Wuy0IeIsVuRvfsLgHo3KUl4";
const DECOR_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCApuCYuvgTuVS2fFWA5tyDHUNTjbA0yuU3qAIn8Sf0cpQ22TTSNVxqxD3EnfvTjlCyj3BHo8f6EyeQNmaIpJ_Id_0GSPc2pw2-nYua5wezChpHA8GmMRxz8z-GVhpayElfaPd-2d8pTzhyLbnxw7k4foKQxdNOeBHd62Fb-BFmjV1C4HRQWc9c2UesmdAvyGA06zrgFBSqGDPxpH0KbxE1koPzURFvcyB90ovLJJ9w3iiZp2DwTCDggu3f-ftrqs5XFmB-MW29AVAM";

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
