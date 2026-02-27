"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBDo0vZRlJU-II4ivrG5-j2ZB6_CFW0jqtbctfYW3HKmuGqXQyDG3F-4I1_Ds_cQghq17vAI-B_0cfcpnrWswbT0fmztwQni9K5YzMvwBHgecEIyiUsQFyakAhQddRRA2k4RLVtMQ9KRsE15IOKelWKVqlFYo4dXSFqT22hhX6zCHwxm4Qf6NyfrpsQ5saQNO0kFECqlRmUdQHiZhLIAE7sukQwdvuU2JL1tMyWNCYNTvdoZDJO0kI9DMvMb2GarpTw8KU_Jc52UqdM";

export default function HeroSection() {
  const heroArchRef = useRef<HTMLDivElement>(null);
  const heroOverlayRef = useRef<HTMLDivElement>(null);
  const enteredContentRef = useRef<HTMLDivElement>(null);
  const [, setTick] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(Math.max(scrollY / (windowHeight * 1.5), 0), 1);

      if (progress < 1) {
        const startWidth = window.innerWidth >= 768 ? 50 : 80;
        const endWidth = 100;
        const currentWidth = startWidth + (endWidth - startWidth) * progress;
        const startHeight = 70;
        const endHeight = 100;
        const currentHeight = startHeight + (endHeight - startHeight) * progress;
        const startRadius = 1000;
        const currentRadius = startRadius * (1 - progress);

        if (heroArchRef.current) {
          heroArchRef.current.style.width = `${currentWidth}vw`;
          heroArchRef.current.style.height = `${currentHeight}vh`;
          heroArchRef.current.style.borderTopLeftRadius = `${currentRadius}px`;
          heroArchRef.current.style.borderTopRightRadius = `${currentRadius}px`;
        }
        if (heroOverlayRef.current) {
          heroOverlayRef.current.style.opacity = String(1 - progress * 3);
        }
        if (enteredContentRef.current) {
          enteredContentRef.current.style.opacity = "0";
        }
      } else {
        if (heroArchRef.current) {
          heroArchRef.current.style.width = "100vw";
          heroArchRef.current.style.height = "100vh";
          heroArchRef.current.style.borderTopLeftRadius = "0px";
          heroArchRef.current.style.borderTopRightRadius = "0px";
        }
        if (enteredContentRef.current) {
          enteredContentRef.current.style.opacity = "1";
        }
      }
      setTick((t) => t + 1);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky-wrapper" id="hero-wrapper">
      <div className="sticky-content">
        <div className="zoom-container" id="zoom-container">
          <div
            ref={heroArchRef}
            className="arch-mask relative shadow-2xl w-[50vw] h-[70vh] md:w-[50vw] md:h-[70vh] rounded-t-[1000px]"
          >
            <Image
              alt="View through an archway to a luxury pool and landscape"
              src={HERO_IMAGE}
              fill
              className="object-cover object-[center_bottom]"
              sizes="100vw"
              priority
            />
            <div
              ref={heroOverlayRef}
              className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center text-center z-10 transition-opacity duration-500"
            >
              <p className="font-sans text-xs tracking-[0.4em] uppercase text-white/90 mb-6 animate-fade-in-up">
                Architecture & Design
              </p>
              <h2
                className="font-display text-7xl md:text-9xl text-white leading-none font-light animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                DUNA
              </h2>
            </div>
          </div>
        </div>
        <div
          ref={enteredContentRef}
          className="absolute inset-0 pointer-events-none flex flex-col justify-end pb-24 items-center opacity-0 transition-opacity duration-1000"
        >
          <h3 className="font-display text-6xl md:text-8xl text-Black text-center mix-blend-overlay">
            Welcome Home
          </h3>
        </div>
      </div>
    </div>
  );
}
