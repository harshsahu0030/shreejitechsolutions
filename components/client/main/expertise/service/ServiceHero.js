"use client";

import Breadcrumbs from "@/components/client/providers/Breadcrumbs";
import Image from "next/image";

const ServiceHero = ({ service = {}, bgColor }) => {
  return (
    <section
      aria-label="service-hero"
      className={`min-h-screen w-full flex flex-col gap-20  bg-(--bg-${bgColor})`}
    >
      {/* top  */}
      <div className="w-full  grid grid-cols-1 xl:grid-cols-12  gap-10 xl:gap-20">
        {/* images  */}
        <div className="xl:col-span-7 flex gap-2 h-[60vh] xl:h-screen">
          <div className="w-[70%] h-full pb-20">
            <Image
              src={service?.services?.topMainImage?.node?.sourceUrl}
              alt={
                service?.services?.topMainImage?.node?.altText ||
                "Website-Image"
              }
              height={300}
              width={300}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-[30%] h-full flex items-end">
            <Image
              src={service?.services?.topSecondImage?.node?.sourceUrl}
              alt="agency-image"
              height={300}
              width={300}
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* cotent */}
        <div className="xl:col-span-5 h-full w-full flex flex-col  justify-end gap-5 responsives pb-20 ">
          <Breadcrumbs />
          <h2 className="text-5xl xl:text-6xl font-semibold">
            {service?.services?.topMainHeading}
          </h2>
          <h3 className="text-3xl font-medium">
            {service?.services?.topSubHeading}
          </h3>
          <p className="text-xl font-medium">
            {service?.services?.topParagraph}
          </p>
        </div>
      </div>

      {/* bottom  */}
      <div className="w-full  grid grid-cols-1 xl:grid-cols-12  gap-10 xl:gap-20">
        <div className="xl:col-span-7 h-full w-full responsives flex flex-col gap-10">
          <h2 className="text-4xl font-semibold">
            {service?.services?.centerHeading}
          </h2>
          <p className="text-2xl font-medium">
            {service?.services?.serbiceDetails}
          </p>
        </div>
        <div className="xl:col-span-5 h-full w-full responsives flex flex-col items-end gap-5">
          <Image
            src={service?.services?.centerImage1?.node?.sourceUrl}
            alt="agency-image"
            height={300}
            width={300}
            className="object-cover w-1/2"
            loading="lazy"
          />

          <Image
            src={service?.services?.image?.node?.sourceUrl}
            alt="agency-image"
            height={300}
            width={300}
            className="objecy-cover w-1/2"
            loading="lazy"
          />
        </div>
      </div>

      {/* botom image  */}
      <div className="w-full h-full">
        <Image
          src={service?.services?.bottomImage?.node?.sourceUrl}
          alt="agency-image"
          height={800}
          width={800}
          className="w-full objecy-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default ServiceHero;
