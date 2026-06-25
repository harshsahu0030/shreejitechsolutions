"use client";

import { agencyVision } from "@/data/siteConfig";
import { FaStarOfLife } from "react-icons/fa";
import agency01 from "@/public/agency/agency01.avif";
import agency02 from "@/public/agency/agency02.avif";
import Image from "next/image";

const AgencyVision = () => {
  return (
    <section
      aria-label="agency-vision"
      className="min-h-screen w-full bg-(--bg-black) responsives py-25"
    >
      {/* agency-header  */}
      <div className="w-full py-5 border-t-2 border-(--bg-white) grid grid-cols-12 text-(--text-white) gap-4 xl:gap-20">
        <div className="col-span-8">
          <p className="uppercase font-semibold text-sm">
            we create websites with <br /> love and passion
          </p>
        </div>
        <div className="col-span-4 grid grid-cols-1 xl:grid-cols-2 gap-4">
          <p className="uppercase font-semibold text-sm">
            for cool brands <br /> and customers
          </p>

          <p className="uppercase font-semibold text-sm">since 2025</p>
        </div>
      </div>

      {/* content  */}
      <div className="w-full py-10 grid grid-cols-1 xl:grid-cols-12 text-(--text-white) ga[-4] gap-10 xl:gap-20">
        <div className="xl:col-span-8 flex flex-col gap-10">
          <p className="text-3xl xl:text-5xl">
            {`Right from the start, we've carved out our niche with a bold
            approach. Crafting immersive experiences that authentically reflect
            your essence relies on seamlessly blending your vision with our
            expertise.`}
          </p>
          <div className="flex items-end justify-start gap-2 w-full h-[50vh] xl:h-screen ">
            <Image
              src={agency02}
              alt="agency-image"
              height={300}
              width={300}
              className="h-full w-fit object-contain"
            />
            <Image
              src={agency01}
              alt="agency-image"
              height={300}
              width={300}
              className="h-1/3 w-fit object-contain"
            />
          </div>
        </div>

        <div className="xl:col-span-4 h-full w-full flex flex-col  justify-end">
          {agencyVision?.map((item, index) => (
            <div key={index} className="flex items-center gap-5 py-10 border-y">
              <FaStarOfLife className="text-5xl" />
              <p className="text-xl font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgencyVision;
