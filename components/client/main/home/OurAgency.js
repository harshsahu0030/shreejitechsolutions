import Image from "next/image";
import CommonLink from "../../providers/CommonLink";
import placeholderImage from "@/public/placeholderImage.webp";
import { agencyMotive } from "@/data/siteConfig";

const OurAgency = () => {
  return (
    <section
      aria-label="our-agency"
      className="h-full w-full py-20 responsives flex flex-col gap-10"
    >
      {/* team-header */}
      <div className="flex flex-col xl:flex-row justify-between gap-5">
        <h2 className="text-[12vw] leading-[12vw] font-semibold">Agency</h2>

        <div className="w-full xl:w-[40%] flex flex-col gap-10 justify-end">
          <p className="text-xl font-medium">
            {`
          We love being close to our customers, we cherish the encounters that make us grow and the challenges that make us think.`}
          </p>

          <CommonLink label="contact us" url="/contact" />
        </div>
      </div>

      {/* content  */}
      <div className="grid grid-cols-1  xl:grid-cols-12 gap-5">
        <div className="w-full xl:col-span-8  flex flex-col gap-10">
          <div className="w-full flex gap-2 h-[60vh] xl:h-screen ">
            <div className="w-[70%] h-full">
              <Image
                src={
                  "https://content.shreejitechsolutions.in/wp-content/uploads/2026/07/agency02-scaled.webp"
                }
                alt="agency-image"
                height={300}
                width={300}
                className="h-full w-full object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL={placeholderImage}
              />
            </div>
            <div className="w-[30%] h-full flex flex-col justify-end gap-5">
              <Image
                src={
                  "https://content.shreejitechsolutions.in/wp-content/uploads/2026/07/agency05-scaled.webp"
                }
                alt="agency-image"
                height={300}
                width={300}
                className="w-full object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL={placeholderImage}
              />
              <Image
                src={
                  "https://content.shreejitechsolutions.in/wp-content/uploads/2026/07/agency04-scaled.webp"
                }
                alt="agency-image"
                height={300}
                width={300}
                className="w-full object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL={placeholderImage}
              />
            </div>
          </div>

          <div className="flex flex-col">
            {agencyMotive?.map((item) => (
              <div
                key={item?.id}
                className="grid xl:grid-cols-2 gap-2 py-10 items-center"
              >
                <h3 className="uppercase font-semibold">{item?.title}</h3>
                <p className="font-medium text-xl">{item?.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full xl:col-span-4 flex flex-col justify-end items-center gap-10">
          <Image
            src={
              "https://content.shreejitechsolutions.in/wp-content/uploads/2026/07/agency03-scaled.webp"
            }
            alt="agency-image"
            height={300}
            width={300}
            className="w-full object-cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL={placeholderImage}
          />
          <p className="text-8xl font-semibold">2026</p>
        </div>
      </div>
    </section>
  );
};

export default OurAgency;
