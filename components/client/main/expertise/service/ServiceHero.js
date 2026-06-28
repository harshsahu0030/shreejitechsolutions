"use client";

import agency02 from "@/public/agency/agency02.avif";
import Image from "next/image";
import { useSelectedLayoutSegments } from "next/navigation";

const ServiceHero = () => {
  const path = useSelectedLayoutSegments();

  console.log(path);

  return (
    <section aria-label="service-hero" className="min-h-screen w-full">
      <div className="min-h-screen w-full grid grid-cols-12 gap-20 bg-(--bg-blue)">
        <div className="col-span-7 h-[80vh] w-full">
          <Image
            src={agency02}
            alt="agency-image"
            height={400}
            width={400}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="col-span-5">Hello</div>
      </div>
    </section>
  );
};

export default ServiceHero;
