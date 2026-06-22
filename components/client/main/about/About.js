export default function About() {
  const values = [
    {
      title: "Quality first",
      description:
        "We write clean, maintainable code and follow industry best practices on every project.",
    },
    {
      title: "Client partnership",
      description:
        "We treat every engagement as a collaboration — transparent communication from start to finish.",
    },
    {
      title: "Innovation driven",
      description:
        "We stay current with emerging technologies to deliver solutions that stand the test of time.",
    },
  ];

  return (
    <>
      <section className="section-padding bg-brand-surface">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-brand-primary md:text-5xl">
              About Shreeji Tech Solutions
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-brand-muted">
              We are a technology company dedicated to helping businesses
              transform through software. From startups to established
              enterprises, we deliver solutions that are scalable, secure, and
              built for growth.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-primary">
                Our mission
              </h2>
              <p className="mt-4 leading-relaxed text-brand-muted">
                To empower businesses with technology that simplifies
                operations, enhances customer experiences, and unlocks new
                opportunities. We believe great software should be accessible,
                reliable, and aligned with your business goals.
              </p>
              <p className="mt-4 leading-relaxed text-brand-muted">
                Our team brings together expertise in web development, mobile
                apps, cloud infrastructure, and design — working as an
                extension of your team to turn vision into reality.
              </p>
            </div>

            <div className="rounded-2xl bg-brand-primary p-8 text-white md:p-10">
              <h3 className="text-2xl font-bold">Why choose us?</h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Experienced full-stack development team",
                  "Agile, iterative delivery process",
                  "Post-launch support and maintenance",
                  "Transparent pricing and timelines",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-surface">
        <div className="container-site">
          <h2 className="mb-12 text-center text-3xl font-bold text-brand-primary">
            Our values
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-brand-border bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-brand-primary">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
