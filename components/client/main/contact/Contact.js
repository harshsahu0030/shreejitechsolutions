"use client";

import { useState } from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="section-padding bg-brand-surface">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold text-brand-primary md:text-5xl">
              Get in touch
            </h1>
            <p className="mt-4 text-lg text-brand-muted">
              Tell us about your project and we&apos;ll get back to you within
              one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="space-y-8 lg:col-span-2">
              <div>
                <h2 className="text-xl font-semibold text-brand-primary">
                  Contact information
                </h2>
                <p className="mt-2 text-sm text-brand-muted">
                  Prefer to reach out directly? Use any of the channels below.
                </p>
              </div>

              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                    <HiMail size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-brand-primary">
                      Email
                    </p>
                    <a
                      href="mailto:info@shreejitechsolutions.com"
                      className="text-sm text-brand-muted transition-colors hover:text-brand-accent"
                    >
                      info@shreejitechsolutions.com
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                    <HiPhone size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-brand-primary">
                      Phone
                    </p>
                    <a
                      href="tel:+911234567890"
                      className="text-sm text-brand-muted transition-colors hover:text-brand-accent"
                    >
                      +91 123 456 7890
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                    <HiLocationMarker size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-brand-primary">
                      Location
                    </p>
                    <p className="text-sm text-brand-muted">
                      India
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              {submitted ? (
                <div className="rounded-2xl border border-brand-border bg-brand-surface p-8 text-center">
                  <h3 className="text-xl font-semibold text-brand-primary">
                    Thank you for reaching out!
                  </h3>
                  <p className="mt-2 text-sm text-brand-muted">
                    We&apos;ve received your message and will respond shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 rounded-2xl border border-brand-border bg-white p-8"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-brand-primary"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full rounded-lg border border-brand-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-brand-primary"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-brand-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1.5 block text-sm font-medium text-brand-primary"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="w-full rounded-lg border border-brand-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-brand-primary"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full resize-none rounded-lg border border-brand-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-brand-accent py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-accent-hover sm:w-auto sm:px-8"
                  >
                    Send message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
