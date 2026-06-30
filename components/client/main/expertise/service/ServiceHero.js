"use client";

import Breadcrumbs from "@/components/client/providers/Breadcrumbs";
import Image from "next/image";

const ServiceHero = ({ service = {}, bgColor = "white" }) => {
  const data = service?.services ?? {};

  const images = {
    topMain: data.topMainImage?.node,
    topSecond: data.topSecondImage?.node,
    center: data.centerImage1?.node,
    side: data.image?.node,
    bottom: data.bottomImage?.node,
  };

  return (
    <section
      aria-label="service-hero"
      className={`min-h-screen w-full flex flex-col gap-20 bg-(--bg-${bgColor})`}
    >
      {/* Top */}
      <div className="w-full grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-20">
        <div className="xl:col-span-7 flex gap-2 h-[60vh] xl:h-screen">
          <div className="w-[70%] h-full pb-20">
            {images.topMain?.sourceUrl && (
              <Image
                src={images.topMain.sourceUrl}
                alt={images.topMain.altText || "Main Image"}
                width={800}
                height={1200}
                className="h-full w-full object-cover"
                priority
              />
            )}
          </div>

          <div className="w-[30%] h-full flex items-end">
            {images.topSecond?.sourceUrl && (
              <Image
                src={images.topSecond.sourceUrl}
                alt={images.topSecond.altText || "Secondary Image"}
                width={400}
                height={800}
                className="w-full object-cover"
              />
            )}
          </div>
        </div>

        <div className="xl:col-span-5 h-full flex flex-col justify-end gap-5 responsives pb-20">
          <Breadcrumbs />

          <h1 className="text-5xl xl:text-6xl font-semibold">
            {data.topMainHeading || ""}
          </h1>

          <h2 className="text-3xl font-medium">{data.topSubHeading || ""}</h2>

          <p className="text-xl font-medium">{data.topParagraph || ""}</p>
        </div>
      </div>

      {/* Middle */}
      <div className="w-full grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-20">
        <div className="xl:col-span-7 flex flex-col gap-10 responsives">
          <h2 className="text-4xl font-semibold">{data.centerHeading || ""}</h2>

          <p className="text-2xl font-medium">{data.serbiceDetails || ""}</p>
        </div>

        <div className="xl:col-span-5 flex flex-col items-end gap-5 responsives">
          {images.center?.sourceUrl && (
            <Image
              src={images.center.sourceUrl}
              alt={images.center.altText || "Center Image"}
              width={500}
              height={500}
              className="w-1/2 object-cover"
            />
          )}

          {images.side?.sourceUrl && (
            <Image
              src={images.side.sourceUrl}
              alt={images.side.altText || "Side Image"}
              width={500}
              height={500}
              className="w-1/2 object-cover"
            />
          )}
        </div>
      </div>

      {/* Bottom */}
      {images.bottom?.sourceUrl && (
        <div className="w-full">
          <Image
            src={images.bottom.sourceUrl}
            alt={images.bottom.altText || "Bottom Image"}
            width={1600}
            height={900}
            className="w-full object-cover"
          />
        </div>
      )}
    </section>
  );
};

export default ServiceHero;
