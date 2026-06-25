import { expertiseServiceslist } from "@/data/siteConfig";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { useRef } from "react";

const ExpertiseServices = () => {
  const serverRef = useRef();

  useGSAP(() => {}, { scope: serverRef });

  return (
    <section
      ref={serverRef}
      aria-label="expertise-services"
      className="min-h-screen w-full responsives py-10"
    >
      <div className="service-wrapper">
        <div className="flex gap-10">
          {/* head  */}
          <div className="flex-1 flex flex-col">
            <h2 className="text-[12vw] leading-[12vw] font-semibold">
              Services
            </h2>
          </div>

          <div className="flex-1 w-full flex flex-col items-end py-20 pl-20">
            {expertiseServiceslist?.map((item) => (
              <Link
                href={"/"}
                key={item?.id}
                className="servicelist-item w-full p-5 flex items-center justify-between border-b"
              >
                <span className="uppercase font-semibold">0{item?.id}</span>
                <span className="uppercase font-semibold">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseServices;
