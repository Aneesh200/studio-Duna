import RevealOnScroll from "./RevealOnScroll";

export default function VisionSection() {
  return (
    <section className="relative z-10 bg-eggshell dark:bg-dark-bg py-32 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        <RevealOnScroll className="md:col-span-4">
          <span className="block w-12 h-[1px] bg-primary mb-8" />
          <h3 className="font-sans text-xs tracking-[0.25em] uppercase text-text-muted dark:text-dark-muted mb-4">
            The Vision
          </h3>
          <p className="font-display text-4xl leading-tight text-text-main dark:text-dark-text">
            We design boundaries that disappear, inviting the landscape to become
            part of the living experience.
          </p>
        </RevealOnScroll>
        <RevealOnScroll className="md:col-span-8" style={{ transitionDelay: "0.2s" }}>
          <p className="text-xl font-light text-text-muted dark:text-dark-muted leading-relaxed max-w-2xl">
            Founded on the principles of light, space, and silence, Duna
            Architects creates environments that transcend the ordinary. Every
            structure is a dialogue with its surroundings, a carefully
            orchestrated sequence of reveals and shelter.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
