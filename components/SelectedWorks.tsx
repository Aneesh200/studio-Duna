"use client";

import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";

const HOME_PROJECTS = PROJECTS.slice(0, 4).map((p, i) => ({
  ...p,
  location: p.country ? `${p.location}, ${p.country}` : p.location,
  dark: i % 2 === 0,
  tall: i % 2 === 0,
}));

export default function SelectedWorks() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollerRef.current) {
      const amount = window.innerWidth * 0.5;
      scrollerRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-eggshell-dark py-32 overflow-hidden">
      <div className="px-6 md:px-12 mb-16 flex justify-between items-end">
        <div>
          <h2 className="font-display text-6xl md:text-8xl text-text-main mb-4">
            Selected Works
          </h2>
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-text-muted">
            Curated Residences
          </p>
        </div>
        <div className="hidden md:flex gap-4">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-text-muted/30 flex items-center justify-center hover:bg-text-main hover:text-white transition-all"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-text-muted/30 flex items-center justify-center hover:bg-text-main hover:text-white transition-all"
          >
            <span className="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
      <div
        ref={scrollerRef}
        className="parallax-section px-6 md:px-12"
        id="project-scroller"
      >
        {HOME_PROJECTS.map((project, i) => (
          <article
            key={project.slug}
            className={`parallax-item group cursor-pointer ${
              project.tall ? "md:flex-[0_0_60vw]" : "md:flex-[0_0_45vw] mt-24"
            }`}
          >
            <Link href={`/projects/${project.slug}`} className="block">
              <div
                className={`relative overflow-hidden ${
                  project.tall ? "h-[70vh]" : "h-[50vh]"
                }`}
              >
                <Image
                  alt={project.title}
                  src={project.image}
                  fill
                  className="object-cover image-glide"
                  sizes="(max-width: 768px) 80vw, 60vw"
                />
                <div
                  className={`absolute inset-0 transition-colors duration-500 ${
                    project.dark
                      ? "bg-black/20 group-hover:bg-black/10"
                      : "bg-black/0 group-hover:bg-black/10"
                  }`}
                />
                <div
                  className={`absolute left-0 w-full flex justify-between items-end transition-transform duration-500 ${
                    project.dark
                      ? "bottom-0 p-8 md:p-12 translate-y-4 group-hover:translate-y-0"
                      : "-bottom-16 py-4"
                  }`}
                >
                  <div
                    className={
                      project.dark ? "text-white" : "text-text-main group-hover:translate-x-4 transition-transform duration-500"
                    }
                  >
                    <span
                      className={`text-xs tracking-[0.3em] uppercase block mb-2 ${
                        project.dark ? "opacity-80" : "text-text-muted mb-1"
                      }`}
                    >
                      {project.location}
                    </span>
                    <h3
                      className={`font-display ${
                        project.dark
                          ? "text-5xl md:text-7xl"
                          : "text-4xl"
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>
                  {project.dark && (
                    <span className="material-symbols-outlined text-white text-4xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      north_east
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </article>
        ))}
        <div className="flex-[0_0_5vw]" />
      </div>
    </section>
  );
}
