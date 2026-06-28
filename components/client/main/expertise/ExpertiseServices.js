import { expertiseServiceslist } from "@/data/siteConfig";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const characters = [
  {
    name: "Arthur Morgan",
    img: "https://i.pinimg.com/1200x/21/56/8d/21568deab265f4f8eaec67c24edf3603.jpg",
  },
  {
    name: "Dutch Van Der Linde",
    img: "https://i.pinimg.com/1200x/af/f1/6a/aff16aae2e723c150b3c75b3e56b0ce9.jpg",
  },
  {
    name: "Charles Smith",
    img: "https://i.pinimg.com/736x/c0/61/80/c06180ff2857208bf7709d6825b7909d.jpg",
  },
  {
    name: "Abigail Marston",
    img: "https://i.pinimg.com/1200x/6a/bb/07/6abb07dbe98dd5283b64edd7817f0ed2.jpg",
  },
  {
    name: "Tilly Jackson",
    img: "https://i.pinimg.com/736x/0f/57/6d/0f576dbec12a4751326e186e0aef6124.jpg",
  },
  {
    name: "Saddie Adler",
    img: "https://i.pinimg.com/736x/a0/98/1f/a0981f17574da29c87ff3884979439d7.jpg",
  },
  {
    name: "Javier Escuella",
    img: "https://i.pinimg.com/1200x/6b/ff/36/6bff36f12ce1cf43d025450abe374fdb.jpg",
  },
  {
    name: "Jack Marston",
    img: "https://i.pinimg.com/736x/36/5b/8e/365b8ea3be38210691af02fc74c17362.jpg",
  },
  {
    name: "Lenny Summers",
    img: "https://i.pinimg.com/1200x/fa/b5/8e/fab58e0d5e511305ce946e76ab912789.jpg",
  },
  {
    name: "Karen Jones",
    img: "https://i.pinimg.com/1200x/df/69/ee/df69eef013c398464c2ac6846943f75b.jpg",
  },
];

const ExpertiseServices = () => {
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
          {characters.map((item, index) => (
            <div key={index} className="slide absolute inset-0">
              <Image
                src={item.img}
                alt={item.name}
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
          {expertiseServiceslist?.map((item, index) => (
            <Link
              href={"/"}
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
