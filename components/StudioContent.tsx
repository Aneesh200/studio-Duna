"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PROJECTS = [
  {
    id: "01",
    slug: "villa-eos",
    location: "Mykonos",
    country: "Greece",
    tag: "Cycladic Modernism",
    code: "GR",
    image: "/images/duna-1.png",
    year: "2023",
    type: "Residential",
    title: "Villa Eos",
    description:
      "A monolithic structure carved from the landscape itself, Villa Eos redefines island living through shadow, light, and silence.",
    layout: "card-right",
    bgColor: "bg-[#e8e6e1]",
  },
  {
    id: "02",
    slug: "arch-house",
    location: "Tuscany",
    country: "Italy",
    tag: "Historic Preservation",
    code: "IT",
    image: "/images/duna-5.png",
    year: "2022",
    type: "Restoration",
    title: "Arch House",
    description:
      "Restoring the soul of a 17th-century estate with minimalist interventions that honor the passage of time.",
    layout: "centered",
    bgColor: "bg-[#f4f1ea]",
  },
  {
    id: "03",
    slug: "dune-retreat",
    location: "Dubai",
    country: "UAE",
    tag: "",
    code: "",
    image: "/images/duna-3.png",
    year: "",
    type: "",
    title: "Dune Retreat",
    description:
      "A sanctuary composed of sand, stone, and water. An architectural response to the infinite desert horizon.",
    layout: "panel-right",
    bgColor: "bg-[#f0ede6]",
  },
  {
    id: "04",
    slug: "casa-arena",
    location: "Cabo",
    country: "Mexico",
    tag: "",
    code: "",
    image: "/images/duna-2.png",
    year: "",
    type: "",
    title: "Casa Arena",
    tagline: "Where the desert meets the sea.",
    description:
      "Blurring the boundaries between indoor luxury and the raw beauty of the Baja peninsula.",
    layout: "minimal",
    bgColor: "bg-[#ece9e3]",
  },
  {
    id: "05",
    slug: "stone-sanctuary",
    location: "Kyoto",
    country: "Japan",
    tag: "",
    code: "",
    image: "/images/duna-6.png",
    year: "",
    type: "",
    title: "Stone Sanctuary",
    subtitle: "Private Commission",
    layout: "overlay",
    bgColor: "bg-[#e8e6e1]",
  },
  {
    id: "06",
    slug: "light-pavilion",
    location: "Copenhagen",
    country: "Denmark",
    tag: "",
    code: "",
    image: "/images/duna-7.png",
    year: "",
    type: "",
    title: "Light Pavilion",
    description:
      "An exploration of transparency and structure. The Light Pavilion serves as a cultural beacon in the harbor district. Utilizing recycled glass and steel to create a sustainable landmark.",
    layout: "text-left",
    bgColor: "bg-eggshell",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const SideMeta = () => (
    <div className="hidden md:flex flex-col justify-between h-[60vh] w-24 absolute left-8 lg:left-16 py-8 z-20 mix-blend-difference text-white">
      <span className="text-xs font-bold tracking-[0.2em]">{project.id}</span>
      <div className="vertical-text text-xs tracking-[0.3em] uppercase opacity-70 flex items-center gap-4">
        <span>{project.location}</span>
        <span className="w-8 h-px bg-current" />
        <span>{project.country}</span>
      </div>
    </div>
  );

  const RightMeta = () =>
    project.tag ? (
      <div className="hidden md:flex flex-col justify-between h-[60vh] w-24 absolute right-8 lg:right-16 py-8 z-20">
        <span className="vertical-text text-xs tracking-[0.2em] font-serif italic text-text-muted">
          {project.tag}
        </span>
        <span className="text-xs font-bold tracking-[0.2em] rotate-90 origin-center translate-y-full text-text-muted">
          {project.code}
        </span>
      </div>
    ) : null;

  if (project.layout === "card-right") {
    return (
      <article
        className={`stack-item ${project.bgColor} dark:bg-dark-bg group`}
        style={{ zIndex: (index + 1) * 10 }}
      >
        <div className="w-full max-w-[1600px] h-full mx-auto px-4 md:px-12 py-12 md:py-24 flex flex-col md:flex-row items-center justify-center relative">
          <SideMeta />
          <div className="relative w-full md:w-[85%] lg:w-[70%] h-[60vh] md:h-[80vh] flex items-center justify-center">
            <div className="absolute inset-0 z-0 bg-[#e8e6e1]" />
            <div className="relative w-full h-full overflow-hidden image-portal">
              <Image
                alt={project.title}
                src={project.image}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 85vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700" />
            </div>
            <div className="absolute -bottom-8 md:bottom-12 md:-right-12 z-30 bg-white p-6 md:p-12 shadow-2xl max-w-xs md:max-w-md">
              <div className="border-l-2 border-primary pl-6">
                <span className="block font-serif italic text-text-muted text-lg mb-2">
                  {project.year} / {project.type}
                </span>
                <h3 className="font-display text-4xl md:text-5xl text-text-main leading-none mb-4">
                  {project.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-block mt-6 text-xs uppercase tracking-[0.2em] hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1"
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
          <RightMeta />
        </div>
      </article>
    );
  }

  if (project.layout === "centered") {
    return (
      <article
        className={`stack-item ${project.bgColor} dark:bg-dark-bg group`}
        style={{ zIndex: (index + 1) * 10 }}
      >
        <Link href={`/projects/${project.slug}`} className="block w-full h-full">
          <div className="w-full max-w-[1600px] h-full mx-auto px-4 md:px-12 py-12 md:py-24 flex flex-col md:flex-row items-center justify-center relative">
            <SideMeta />
            <div className="relative w-full md:w-[75%] lg:w-[60%] h-[55vh] md:h-[75vh] flex items-center justify-center">
              <div className="relative w-full h-full overflow-hidden image-portal shadow-xl">
                <Image
                  alt={project.title}
                  src={project.image}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 75vw"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-center mix-blend-difference text-white pointer-events-none w-full">
                <h3 className="font-display text-6xl md:text-8xl lg:text-9xl opacity-90 leading-none">
                  {project.title}
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 md:-left-12 z-30 bg-white p-6 md:p-10 shadow-lg max-w-xs">
                <span className="block font-serif italic text-primary text-md mb-2">
                  {project.year} / {project.type}
                </span>
                <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
            <RightMeta />
          </div>
        </Link>
      </article>
    );
  }

  if (project.layout === "panel-right") {
    return (
      <article
        className={`stack-item ${project.bgColor} dark:bg-dark-bg group`}
        style={{ zIndex: (index + 1) * 10 }}
      >
        <Link href={`/projects/${project.slug}`} className="block w-full h-full">
          <div className="w-full max-w-[1600px] h-full mx-auto px-4 md:px-12 py-12 md:py-24 flex flex-col md:flex-row items-center justify-center relative">
            <SideMeta />
            <div className="relative w-full md:w-[90%] lg:w-[80%] h-[50vh] md:h-[70vh] flex items-center justify-center">
            <div className="relative w-full h-full overflow-hidden image-portal">
              <Image
                alt={project.title}
                src={project.image}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 90vw"
              />
            </div>
            <div className="absolute top-0 right-0 md:-right-8 lg:-right-16 md:top-12 z-30 bg-white/95 backdrop-blur-sm p-8 md:p-12 w-full md:w-1/3 border-l border-primary/20">
              <h3 className="font-display text-4xl md:text-5xl text-text-main mb-4">
                Dune
                <br />
                Retreat
              </h3>
              <div className="h-px w-12 bg-primary mb-6" />
              <p className="text-sm text-text-muted leading-relaxed mb-6">
                {project.description}
              </p>
              <ul className="text-xs uppercase tracking-widest space-y-2 text-text-main opacity-60">
                <li>Spa & Wellness</li>
                <li>12,000 SQ FT</li>
                <li>2024</li>
              </ul>
            </div>
          </div>
        </div>
        </Link>
      </article>
    );
  }

  if (project.layout === "minimal") {
    return (
      <article
        className={`stack-item ${project.bgColor} dark:bg-dark-bg group`}
        style={{ zIndex: (index + 1) * 10 }}
      >
        <Link href={`/projects/${project.slug}`} className="block w-full h-full">
          <div className="w-full max-w-[1600px] h-full mx-auto px-4 md:px-12 py-12 md:py-24 flex flex-col md:flex-row items-center justify-center relative">
            <SideMeta />
            <div className="relative w-full md:w-[60%] lg:w-[50%] h-[60vh] md:h-[80vh] flex items-center justify-center">
              <div className="relative w-full h-full overflow-hidden image-portal shadow-2xl">
                <Image
                  alt={project.title}
                  src={project.image}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>
              <div className="absolute bottom-12 right-4 md:right-auto md:left-[65%] lg:left-[60%] z-30 w-full md:w-1/3 pl-8 pr-6 py-6 md:py-8 bg-white/95 backdrop-blur-sm rounded-sm shadow-lg">
                <h3 className="font-display text-5xl md:text-7xl text-text-main mb-2">
                  {project.title}
                </h3>
                <p className="font-serif italic text-xl text-primary mb-6">
                  {project.tagline}
                </p>
                <p className="text-sm text-text-muted leading-relaxed max-w-xs">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  if (project.layout === "overlay") {
    return (
      <article
        className={`stack-item ${project.bgColor} dark:bg-dark-bg group`}
        style={{ zIndex: (index + 1) * 10 }}
      >
        <Link href={`/projects/${project.slug}`} className="block w-full h-full">
          <div className="w-full max-w-[1600px] h-full mx-auto px-4 md:px-12 py-12 md:py-24 flex flex-col md:flex-row items-center justify-center relative">
            <SideMeta />
            <div className="relative w-full md:w-[90%] h-[40vh] md:h-[60vh] flex items-center justify-center">
              <div className="relative w-full h-full overflow-hidden image-portal">
                <Image
                  alt={project.title}
                  src={project.image}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 90vw"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                <div className="text-center text-white">
                  <h3 className="font-display text-6xl mb-2">{project.title}</h3>
                  <p className="text-xs tracking-[0.4em] uppercase">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  if (project.layout === "text-left") {
    return (
      <article
        className={`stack-item ${project.bgColor} dark:bg-dark-bg group`}
        style={{ zIndex: (index + 1) * 10 }}
      >
        <div className="w-full max-w-[1600px] h-full mx-auto px-4 md:px-12 py-12 md:py-24 flex flex-col md:flex-row items-center justify-center relative">
          <SideMeta />
          <div className="relative w-full md:w-[40%] h-[50vh] md:h-[70vh] flex items-center justify-center mr-auto md:ml-[15%]">
            <div className="relative w-full h-full overflow-hidden image-portal shadow-lg">
              <Image
                alt={project.title}
                src={project.image}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
          <div className="absolute right-0 md:right-[15%] top-1/2 transform -translate-y-1/2 w-full md:w-[35%] p-8">
            <span className="text-9xl text-primary/10 absolute -top-20 -left-12 font-display select-none pointer-events-none">
              Light
            </span>
            <h3 className="font-display text-5xl md:text-6xl text-text-main mb-6 relative z-10">
              {project.title}
            </h3>
            <div className="space-y-6 text-sm text-text-muted leading-relaxed border-l border-primary pl-6">
              <p>{project.description}</p>
            </div>
            <div className="mt-12">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] group-hover:text-primary transition-colors"
              >
                <span>Explore Case Study</span>
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return null;
}

export default function StudioContent() {
  const [filter, setFilter] = useState("All");

  return (
    <>
      <section className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6 relative z-10 pt-32 pb-8">
        <div
          className="opacity-0 translate-y-4 animate-fade-in-up max-w-2xl mx-auto"
          style={{ animationDuration: "1s", animationFillMode: "forwards" }}
        >
          <p className="font-serif italic text-xl md:text-2xl text-text-muted dark:text-white/70 mb-4 tracking-wide">
            Vol. III — Editorial
          </p>
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.85] font-light text-text-main dark:text-white mb-6">
            The
            <br />
            Collection
          </h2>
          <p className="text-text-muted dark:text-white/70 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-xl mx-auto">
            A curated selection of residential, commercial, and public works—each
            a dialogue between landscape and light.
          </p>
          <div className="w-px h-16 bg-text-main dark:bg-white/30 mx-auto opacity-20 dark:opacity-100" />
        </div>
      </section>

      <div className="sticky top-8 z-50 flex justify-center pt-8 md:pt-12 mb-12">
        <div className="bg-white/95 backdrop-blur-md rounded-full px-6 py-3 shadow-sm border border-black/5">
          <div className="flex space-x-6 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-text-main">
            <button
              type="button"
              onClick={() => setFilter("All")}
              className={`${
                filter === "All"
                  ? "text-text-main border-b-2 border-text-main pb-0.5"
                  : "text-text-muted hover:text-text-main transition-colors"
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setFilter("Living")}
              className={`${
                filter === "Living"
                  ? "text-text-main border-b-2 border-text-main pb-0.5"
                  : "text-text-muted hover:text-text-main transition-colors"
              }`}
            >
              Living
            </button>
            <button
              type="button"
              onClick={() => setFilter("Working")}
              className={`${
                filter === "Working"
                  ? "text-text-main border-b-2 border-text-main pb-0.5"
                  : "text-text-muted hover:text-text-main transition-colors"
              }`}
            >
              Working
            </button>
            <button
              type="button"
              onClick={() => setFilter("Public")}
              className={`${
                filter === "Public"
                  ? "text-text-main border-b-2 border-text-main pb-0.5"
                  : "text-text-muted hover:text-text-main transition-colors"
              }`}
            >
              Public
            </button>
          </div>
        </div>
      </div>

      <div className="stack-container w-full relative">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <section
        id="contact"
        className="relative bg-background-dark dark:bg-dark-elevated text-white py-32 px-6 overflow-hidden z-[100]"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image
            alt="texture"
            src="/images/duna-9.png"
            fill
            className="object-cover grayscale"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.4em] uppercase mb-8 text-primary">
            Inquiries
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-light mb-12">
            Building the future,
            <br />
            one detail at a time.
          </h2>
          <Link
            href="/contact"
            className="inline-block border border-white/30 px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-background-dark dark:hover:text-dark-bg transition-all duration-500"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
