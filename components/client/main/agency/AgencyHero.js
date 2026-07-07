import placeholderImage from "@/public/placeholderImage.webp";
import Image from "next/image";

const AgencyHero = () => {
  return (
    <section
      areia-label="agency-hero"
      className="h-full py-25 pt-40 w-full responsives relative"
    >
      <div className="absolute top-0 left-0 w-full h-full -z-1 flex gap-10 responsives py-25 opacity-80 ">
        <div className="flex-1 h-full flex items-baseline">
          <Image
            src={
              "https://content.shreejitechsolutions.in/wp-content/uploads/2026/07/pexels-cottonbro-5082237-scaled.webp"
            }
            alt="agency-image"
            height={500}
            width={500}
            className="object-contain "
            loading="lazy"
            placeholder="blur"
            blurDataURL={placeholderImage}
          />
        </div>
        <div className="flex-1 h-full flex items-center">
          <Image
            src={
              "https://content.shreejitechsolutions.in/wp-content/uploads/2026/07/pexels-karola-g-5717968-scaled.webp"
            }
            alt="agency-image"
            height={500}
            width={500}
            className="object-cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL={placeholderImage}
          />
        </div>
        <div className="flex-1 flex items-end">
          <Image
            src={
              "https://content.shreejitechsolutions.in/wp-content/uploads/2026/07/pexels-n-voitkevich-6214477-scaled.webp"
            }
            alt="agency-image"
            height={500}
            width={500}
            className="object-contain"
            loading="lazy"
            placeholder="blur"
            blurDataURL={placeholderImage}
          />
        </div>
      </div>

      <div className="w-full grid xl:grid-cols-2">
        <div className="w-fit pb-5 pt-5  border-b-2 border-(--bg-black) order-2 xl:order-1">
          <p className="text-[12vw] leading-[15vw] font-medium">We craft</p>
        </div>

        <div className="h-full  flex justify-end items-end order-1 xl:order-2">
          <p className="uppercase text-sm font-medium w-1/2">
            Founded with a vision to empower businesses through digital
            innovation, we bring together experts from across disciplines to
            deliver measurable impact.
          </p>
        </div>
      </div>

      <div className="w-full grid grid-cols-2">
        <div className="h-full w-full"></div>

        <div className="w-full pb-25 pt-5 border-b-2 border-(--bg-black)">
          <p className="text-[12vw] leading-[15vw] font-medium">beautiful</p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-fit pb-10 pt-5 border-b-2 border-(--bg-black)">
          <p className="text-[12vw] leading-[15vw] font-medium">experiences</p>
        </div>
      </div>
    </section>
  );
};

export default AgencyHero;
