import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const ExpertiseHero = () => {
  const expertHeroRef = useRef();

  // hero
  useGSAP(
    () => {
      let tl = gsap
        .timeline()
        .from(".expert-text-up", {
          delay: 1.5,
          opacity: 0,
          y: 100,
        })
        .from(".expert-text-down", {
          opacity: 0,
          y: -100,
        })
        .from(".expert-circle", {
          xPercent: 50,
          yPercent: 50,
          duration: 2,
          stagger: 0.5,
          ease: "expo.inOut",
        });
    },
    {
      scope: expertHeroRef,
    },
  );

  return (
    <section
      ref={expertHeroRef}
      aria-label="expertise-hero"
      className="relative min-h-screen py-25 pt-40 w-full responsives overflow-hidden"
    >
      {/* top  */}
      <div className="flex flex-col xl:flex-row gap-5 justify-between expert-text-up">
        <p className="text-[12vw] leading-[12vw] font-medium">aim for</p>
        <p className="uppercase text-sm font-medium text-end flex self-end">
          Web design and development <br /> agency in India
        </p>
      </div>

      <hr className="border-2 border-(--bg-black) my-5" />

      <div className="flex flex-col-reverse xl:flex-row-reverse gap-5  justify-between expert-text-down">
        <p className="text-[12vw] leading-[12vw] font-medium text-end">
          quality only
        </p>
        <p className="uppercase text-sm font-medium">
          we create websites with <br />
          love and passion
        </p>
      </div>

      {/* bottom  */}
      <div className="pt-30">
        <p className="text-3xl xl:text-6xl font-medium">
          {`Regardless of the latest tech or trends, or even your most
unconventional requests, we specialize in crafting bespoke
websites and digital experiences. Our mission is to equip you with
the most innovative and user‑friendly tools imaginable.`}
        </p>
      </div>

      {/* circle  */}
      <div className="expert-circle absolute  h-[60vmax] w-[60vmax] bg-(--bg-blue) rounded-full -z-1 left-1/2 -translate-x-1/2  top-[-20vmax]"></div>
      <div className="expert-circle absolute  h-[40vmax] w-[40vmax] bg-(--bg-orange) rounded-full -z-2 left-1/2 -translate-x-1/20  top-[10vmax]"></div>
    </section>
  );
};

export default ExpertiseHero;
