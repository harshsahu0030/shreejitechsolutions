import Image from "next/image";
import CommonLink from "../../providers/CommonLink";
import Agency02 from "@/public/agency/agency01.avif";
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
      <div className="grid xl:grid-cols-12 gap-5">
        <div className="col-span-8  flex flex-col gap-10">
          <div className="h-full w-full flex gap-5">
            <div className="w-[70%]">
              <Image
                src={Agency02}
                alt="agency-image"
                height={300}
                width={300}
                className="w-full object-contain "
              />
            </div>
            <div className="w-[30% flex flex-col justify-end gap-5">
              <Image
                src={Agency02}
                alt="agency-image"
                height={300}
                width={300}
                className="w-full object-contain "
              />
              <Image
                src={Agency02}
                alt="agency-image"
                height={300}
                width={300}
                className="w-full object-contain "
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

        <div className="col-span-4 flex flex-col justify-end">
          <Image
            src={Agency02}
            alt="agency-image"
            height={300}
            width={300}
            className="w-full object-coontain"
          />
          <p className="text-[12vw] leading-[12vw] font-semibold">2026</p>
        </div>
      </div>
    </section>
  );
};

export default OurAgency;
