import HighThumbnail from "@/public/highThumbnail.jpg";
import High from "@/public/high.mp4";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Creativity = () => {
  const creativityRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop Only breakpoint (min-width: 1280px matches your xl tailwind class)
      mm.add("(min-width: 1280px)", () => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: creativityRef.current,
            start: "top top",
            end: "+2000",
            scrub: 1,
            pin: true,
          },
        });

        tl.to(
          ".creativity-text",
          {
            opacity: 0,
          },
          "same",
        );
        tl.to(
          videoRef.current,
          {
            scale: 1.5,
            transformOrigin: "left bottom",
          },
          "same",
        );
      });

      // Cleanup matchMedia listeners when component unmounts automatically handled by useGSAP
      return () => mm.revert();
    },
    { scope: creativityRef },
  );

  return (
    <section
      ref={creativityRef}
      className="h-full xl:h-screen w-full  flex flex-col gap-10 py-20 responsives relative"
    >
      <h3 className="creativity-text text-2xl xl:text-4xl font-medium">
        {` Creativity and innovation drive our process, fueled by a commitment to
        uniqueness and tailor‑made solutions. We joyfully reject the ordinary,
        the familiar, and the commonplace, always striving to chart new
        territories in our work.`}
      </h3>

      <div className="h-full flex flex-col xl:flex-row justify-between gap-10">
        <div className="flex flex-1 items-end">
          <video
            ref={videoRef}
            className="w-full f-full  object-cover rounded-lg aspect-video"
            loop
            muted
            playsInline
            autoPlay
            preload="none"
            poster={HighThumbnail}
          >
            <source src={High} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex flex-1 items-end">
          <p className="creativity-text text-2xl xl:text-4xl font-medium">
            {` To set you apart and make you unique, we pay great attention to
            details, both in interfaces and in our animations. We love to play
            and take advantage of our creative freedom to take you places you
            wouldn't expect. And others even less so.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Creativity;
