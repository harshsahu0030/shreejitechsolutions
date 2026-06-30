import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import agency02 from "@/public/agency/agency02.avif";
import { expertiseList } from "@/data/siteConfig";
import CommonLink from "../../providers/CommonLink";

gsap.registerPlugin(ScrollTrigger);

const ExpertisSkills = () => {
  const expertRef = useRef(null);


  //expertise
  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: expertRef.current,
          start: "top top",
          end: "+3000",
          scrub: 1,
          pin: true,
        },
      });

      for (let i = 1; i <= 3; i++) {
        tl.from(`.expert-${i}`, {
          yPercent: 100,
        }).from(`.expert-${i} img`, {
          scale: 0.5,
          opacity: 0,
          transformOrigin: "bottom",
        });
      }
    },
    {
      scope: expertRef,
    },
  );

  return (
    <section
      ref={expertRef}
      className="min-h-screen w-full flex flex-col justify-between"
    >
      <div className="relative h-full w-full">
        <h2 className="text-[12vw] leading-[12vw] font-medium absolute z-10 w-full text-center py-10 border-b">
          Expertise
        </h2>

        {expertiseList?.map((item, index) => {
          return (
            <div
              key={item?.id}
              className={`expert-${item?.id}  responsives h-full w-full  absolute top-0 left-0 pt-[25vw] xl:pt-[20vw]  grid grid-rows-3 xl:grid-cols-3  xl:grid-rows-1 gap-5 ${item?.id === 0 ? "bg-(--bg-blue)" : item?.id === 1 ? "bg-(--bg-pink)" : item?.id === 2 ? "bg-(--bg-green)" : "bg-(--bg-orange)"}`}
            >
              {/* head  */}
              <div className="h-full w-full flex items-center">
                <h3 className="expert-text text-5xl xl:text-6xl font-medium">
                  {item?.title}
                </h3>
              </div>

              {/* image  */}
              <div className="h-full w-full flex items-center">
                <Image
                  src={agency02}
                  alt="agency-image"
                  sizes="(max-width: 1280px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* {content } */}
              <div className="h-full w-full flex flex-col  justify-center gap-5">
                <p className="expert-text uppercase font-semibold text-sm">
                  {item?.description}
                </p>

                <CommonLink label={"contact us"} url="/contact" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExpertisSkills;
