"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExpertiseServices = ({ services }) => {
  const servicesRef = useRef(null);

  // Normalize WordPress data safely
  const serviceList = Array.isArray(services)
    ? services
    : (services?.services ?? []);

  useGSAP(
    () => {
      if (!serviceList.length) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 765px)", () => {
        const listItems = gsap.utils.toArray(".servicelist-item");
        const slides = gsap.utils.toArray(".slide");

        if (!listItems.length || !slides.length) return;

        gsap.set(".fill", {
          scaleY: 0,
          transformOrigin: "top left",
        });

        gsap.set(slides, { autoAlpha: 0 });
        gsap.set(slides[0], { autoAlpha: 1 });

        gsap.set(listItems, { color: "var(--bg-black)" });
        gsap.set(listItems[0], { color: "var(--bg-orange)" });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top top",
            end: `+=${listItems.length * 100}%`,
            pin: true,
            scrub: 1,
          },
        });

        tl.to(".fill", {
          scaleY: 1,
          ease: "none",
          duration: listItems.length,
        });

        listItems.forEach((_, i) => {
          if (i === 0) return;

          tl.to(listItems[i - 1], {
            color: "var(--bg-black)",
            duration: 0.5,
          })
            .to(slides[i - 1], {
              autoAlpha: 0,
              duration: 0.5,
            })
            .to(listItems[i], {
              color: "var(--bg-orange)",
              duration: 0.5,
            })
            .to(slides[i], {
              autoAlpha: 1,
              duration: 0.5,
            });
        });

        return () => {
          ScrollTrigger.getAll().forEach((t) => t.kill());
        };
      });

      return () => mm.revert();
    },
    { scope: servicesRef },
  );

  if (!serviceList.length) return null;

  return (
    <section
      ref={servicesRef}
      aria-label="expertise-services"
      className="w-full responsives py-10"
    >
      <h2 className="py-5 text-5xl md:text-8xl font-semibold">Services</h2>

      <div className="relative flex flex-col md:flex-row gap-10">
        {/* Progress bar */}
        <div className="absolute left-0 top-0 hidden h-full w-2 bg-black/10 md:block">
          <div className="fill h-full w-full bg-orange-500" />
        </div>

        {/* Images */}
        <div className="relative ml-6 flex-1 overflow-hidden min-h-[500px]">
          {serviceList.map((item, index) => {
            const imageUrl = item?.featuredImage?.node?.sourceUrl;
            const alt =
              item?.featuredImage?.node?.altText || item?.title || "Service";

            return (
              <div key={item?.id ?? index} className="slide absolute inset-0">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={alt}
                    fill
                    sizes="(max-width: 1280px) 100vw, 50vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gray-100">
                    No Image Available
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* List */}
        <div className="flex flex-1 flex-col justify-center md:items-end">
          {serviceList.map((item, index) => {
            const slug = item?.slug || "";
            const title = item?.title || "Untitled Service";

            return (
              <Link
                key={item?.id ?? index}
                href={`/expertise/${slug}`}
                className="servicelist-item flex w-full items-center gap-10 border-b border-black p-4 transition-colors xl:justify-between"
              >
                <span className="font-semibold uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-semibold uppercase">{title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseServices;
