import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProjectBySlug, PROJECTS } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Duna Architects`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="bg-eggshell dark:bg-dark-bg text-text-main dark:text-dark-text">
      <Navbar />
      <article>
        <header className="relative h-[70vh] w-full overflow-hidden">
          <Image
            alt={project.title}
            src={project.image}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-white/80 mb-4">
              {project.location}
              {project.country && `, ${project.country}`}
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-tight">
              {project.title}
            </h1>
            {(project.year || project.type) && (
              <p className="font-serif italic text-white/80 mt-4 text-lg">
                {[project.year, project.type].filter(Boolean).join(" / ")}
              </p>
            )}
          </div>
        </header>

        <section className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            {project.tagline && (
              <p className="font-display text-2xl md:text-3xl text-primary italic mb-8">
                {project.tagline}
              </p>
            )}
            <p className="text-xl md:text-2xl font-light text-text-main leading-relaxed">
              {project.description}
            </p>
            {project.details && project.details.length > 0 && (
              <div className="mt-16 pt-12 border-t border-text-muted/20">
                <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-text-muted mb-6">
                  Project Details
                </h3>
                <ul className="flex flex-wrap gap-6">
                  {project.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-text-main font-light"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        <section className="px-6 md:px-12 pb-20">
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
              <Image
                alt={`${project.title} - View`}
                src={project.image}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-eggshell-dark dark:bg-eggshell-dark">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-4xl md:text-5xl text-text-main mb-6">
              Start Your Project
            </h2>
            <p className="text-text-muted mb-10 font-light">
              Interested in creating something similar? Let&apos;s discuss your
              vision.
            </p>
            <Link
              href="/contact"
              className="inline-block border-2 border-text-main px-12 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-text-main hover:text-white transition-all duration-500"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
}
