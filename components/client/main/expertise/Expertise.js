import Link from "next/link";

const expertiseAreas = [
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    description:
      "Pixel-perfect, performant user interfaces with modern frameworks and responsive design.",
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Python", "REST APIs", "GraphQL"],
    description:
      "Robust server-side architecture, APIs, and database design for scalable applications.",
  },
  {
    title: "Mobile Development",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    description:
      "Native-quality mobile experiences for iOS and Android from a single codebase.",
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "CI/CD", "Kubernetes"],
    description:
      "Cloud infrastructure, containerization, and automated deployment pipelines.",
  },
  {
    title: "UI/UX Design",
    skills: ["Figma", "Prototyping", "Design Systems", "User Research"],
    description:
      "Research-driven design that balances usability, accessibility, and brand identity.",
  },
  {
    title: "Quality Assurance",
    skills: ["Automated Testing", "E2E Testing", "Performance", "Security"],
    description:
      "Comprehensive testing strategies to ensure reliability before and after launch.",
  },
];

export default function Expertise() {
  return (
    <>
      <section className="section-padding bg-brand-surface">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-brand-primary md:text-5xl">
              Our expertise
            </h1>
            <p className="mt-6 text-lg text-brand-muted">
              Deep technical knowledge across the full stack — from design to
              deployment and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {expertiseAreas.map((area) => (
              <article
                key={area.title}
                className="flex flex-col rounded-2xl border border-brand-border bg-white p-6 transition-shadow hover:shadow-md"
              >
                <h2 className="text-lg font-semibold text-brand-primary">
                  {area.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                  {area.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {area.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-brand-surface px-3 py-1 text-xs font-medium text-brand-primary/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-brand-primary px-8 py-12 text-center">
            <h2 className="text-2xl font-bold text-white">
              Need a specific technology?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-white/70">
              We adapt to your stack. Tell us what you&apos;re building and
              we&apos;ll assemble the right team.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-brand-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-accent-hover"
            >
              Discuss your project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
