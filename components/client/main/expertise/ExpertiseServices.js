"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import placeHolderImage from "@/public/placeHolderImage.avif";

gsap.registerPlugin(ScrollTrigger);

const ExpertiseServices = ({ services = [] }) => {
  const servicesRef = useRef(null);

  useGSAP(
    () => {
      // 1. Create a matchMedia instance
      let mm = gsap.matchMedia();

      // 2. Wrap your animation logic inside the desktop breakpoint
      mm.add("(min-width: 765px)", () => {
        const listItems = gsap.utils.toArray(".servicelist-item");
        const slides = gsap.utils.toArray(".slide");

        if (listItems.length === 0) return;

        // Set initial layout states
        gsap.set(".fill", { scaleY: 0, transformOrigin: "top left" });
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

        tl.to(
          ".fill",
          {
            scaleY: 1,
            ease: "none",
            duration: listItems.length,
          },
          0,
        );

        listItems.forEach((item, i) => {
          if (i === 0) return;

          tl.to(
            listItems[i - 1],
            { color: "var(--bg-black)", duration: 0.5 },
            i - 0.5,
          )
            .to(slides[i - 1], { autoAlpha: 0, duration: 0.5 }, i - 0.5)
            .to(item, { color: "var(--bg-orange)", duration: 0.5 }, i - 0.5)
            .to(slides[i], { autoAlpha: 1, duration: 0.5 }, i - 0.5);
        });

        // Optional: Return a cleanup function if you need to reset specific inline styles
        // when resizing back down to mobile. GSAP handles ScrollTrigger cleanup automatically!
        return () => {
          gsap.set([".fill", slides, listItems], { clearProps: "all" });
        };
      }); // <-- End of matchMedia desktop block
    },
    { scope: servicesRef },
  );

  return (
    <section
      ref={servicesRef}
      aria-label="expertise-services"
      className="h-full w-full responsives py-10"
    >
      <h2 className=" text-5xl md:text-8xl font-semibold py-5">Services</h2>

      <div className="relative flex flex-col md:flex-row not-only: gap-10">
        {/* Progress Bar */}
        <div className="absolute left-0 top-0 w-2 h-full bg-(--bg-black)/10 hidden md:block">
          <div className="fill w-full h-full bg-(--bg-orange)"></div>
        </div>

        {/* Left Container - Images */}
        <div className="flex-1 relative overflow-hidden ml-6">
          {services?.services.map((item, index) => (
            <div key={index} className="slide absolute inset-0">
              <Image
                src={item.featuredImage?.node?.sourceUrl || placeHolderImage}
                alt={item.featuredImage?.node?.altText || "Service Image"}
                fill
                sizes="(max-width: 1280px) 100vw, 50vw"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Right Container - Services List */}
        <div className="servicelist-wrapper flex-1 w-full flex flex-col justify-center md:items-end">
          {services?.services?.map((item, index) => (
            <Link
              href={`/expertise/${item?.slug}`}
              key={item?.id || index}
              className="servicelist-item w-full p-4 flex items-center xl:justify-between border-b border-(--bg-black) transition-colors gap-10"
            >
              <span className="uppercase font-semibold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="uppercase font-semibold">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseServices;
