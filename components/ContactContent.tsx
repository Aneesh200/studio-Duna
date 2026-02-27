"use client";

import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";
import Link from "next/link";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBDo0vZRlJU-II4ivrG5-j2ZB6_CFW0jqtbctfYW3HKmuGqXQyDG3F-4I1_Ds_cQghq17vAI-B_0cfcpnrWswbT0fmztwQni9K5YzMvwBHgecEIyiUsQFyakAhQddRRA2k4RLVtMQ9KRsE15IOKelWKVqlFYo4dXSFqT22hhX6zCHwxm4Qf6NyfrpsQ5saQNO0kFECqlRmUdQHiZhLIAE7sukQwdvuU2JL1tMyWNCYNTvdoZDJO0kI9DMvMb2GarpTw8KU_Jc52UqdM";

export default function ContactContent() {
  return (
    <>
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            alt=""
            src={HERO_IMAGE}
            fill
            className="object-cover scale-105"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-text-main/60" />
        </div>
        <div
          className="relative z-10 opacity-0 translate-y-4 animate-fade-in-up max-w-2xl mx-auto"
          style={{ animationDuration: "1s", animationFillMode: "forwards" }}
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-white/80 mb-6">
            Let&apos;s Begin
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.85] font-light text-white mb-6">
            Contact
            <br />
            Us
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-md mx-auto mb-8 leading-relaxed">
            We&apos;d love to hear about your vision. Whether it&apos;s a new
            build, a restoration, or a collaboration—let&apos;s start the
            conversation.
          </p>
          <div className="w-px h-16 bg-white/50 mx-auto" />
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <RevealOnScroll className="lg:col-span-5">
            <span className="block w-12 h-[1px] bg-primary mb-8" />
            <h3 className="font-sans text-xs tracking-[0.25em] uppercase text-text-muted mb-6">
              Get in Touch
            </h3>
            <p className="font-display text-4xl leading-tight text-text-main mb-12">
              Every great project begins with a conversation.
            </p>
            <div className="space-y-8 luxury-border-t pt-8">
              <div>
                <span className="block text-xs uppercase tracking-widest text-text-muted mb-2">
                  Email
                </span>
                <Link
                  href="mailto:hello@dunaarchitects.com"
                  className="text-text-main hover:text-primary transition-colors text-lg font-light"
                >
                  hello@dunaarchitects.com
                </Link>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-text-muted mb-2">
                  Studio
                </span>
                <p className="text-text-main leading-relaxed font-light">
                  Kondapur
                  <br />
                  Hyderabad
                </p>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-text-muted mb-2">
                  Inquiries
                </span>
                <p className="text-text-muted text-sm leading-relaxed max-w-md font-light">
                  For new project inquiries, collaborations, or press, please use
                  the form or reach out directly. We typically respond within
                  48 hours.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="lg:col-span-7" style={{ transitionDelay: "0.2s" }}>
            <div className="bg-white p-8 md:p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-black/[0.06]">
              <h3 className="font-display text-3xl md:text-4xl mb-10">
                Start a Project
              </h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs uppercase tracking-[0.2em] text-text-muted mb-3 font-medium"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full border-b-2 border-text-muted/40 bg-eggshell/30 px-1 py-4 text-text-main placeholder:text-text-muted/60 focus:outline-none focus:border-primary focus:bg-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-[0.2em] text-text-muted mb-3 font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full border-b-2 border-text-muted/40 bg-eggshell/30 px-1 py-4 text-text-main placeholder:text-text-muted/60 focus:outline-none focus:border-primary focus:bg-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="project"
                    className="block text-xs uppercase tracking-[0.2em] text-text-muted mb-3 font-medium"
                  >
                    Project Type
                  </label>
                  <div className="relative">
                    <select
                      id="project"
                      name="project"
                      className="w-full border-b-2 border-text-muted/40 bg-eggshell/30 px-1 py-4 pr-10 text-text-main focus:outline-none focus:border-primary focus:bg-transparent transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="">Select an option</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="restoration">Restoration</option>
                      <option value="other">Other</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-text-muted/60 pointer-events-none text-xl">
                      expand_more
                    </span>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-[0.2em] text-text-muted mb-3 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full border-2 border-text-muted/40 bg-eggshell/30 px-4 py-4 text-text-main placeholder:text-text-muted/60 focus:outline-none focus:border-primary focus:bg-transparent transition-all duration-300 resize-none rounded-sm"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-block border-2 border-text-main px-12 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-text-main hover:text-white transition-all duration-500 mt-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-eggshell-dark py-24 px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto text-center">
          <RevealOnScroll>
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-text-muted mb-4">
              Follow Our Work
            </p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-16">
              <Link
                href="#"
                className="text-text-main hover:text-primary transition-colors text-sm uppercase tracking-[0.2em]"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="text-text-main hover:text-primary transition-colors text-sm uppercase tracking-[0.2em]"
              >
                LinkedIn
              </Link>
              <Link
                href="#"
                className="text-text-main hover:text-primary transition-colors text-sm uppercase tracking-[0.2em]"
              >
                Pinterest
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
