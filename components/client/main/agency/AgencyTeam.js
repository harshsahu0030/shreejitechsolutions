"use client";

import Image from "next/image";
import agency02 from "@/public/agency/agency02.avif";

const AgencyTeam = () => {
  return (
    <section
      aria-label="agenct-team"
      className="min-h-screen w-full py-25 responsives bg-(--bg-pink)"
    >
      {/* team-header */}
      <div className="flex flex-col xl:flex-row justify-between gap-5">
        <h2 className="text-[12vw] leading-[12vw] font-semibold">Team</h2>

        <p className="text-xl font-medium w-full xl:w-[40%] flex self-center">
          {`
          Our ambition has always been to continue to evolve, to learn, to
          surpass ourselves. Our team, united, proud, is made up of true
          creative personalities. Or so we're told.
         `}
        </p>
      </div>

      {/* team-grid  */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {Array.from({ length: 6 }).map((item, index) => (
          <div key={index} className="flex flex-col gap-5 py-5 border-b-2">
            <Image
              src={agency02}
              alt="agency-image"
              height={300}
              width={300}
              className="h-full w-full object-cover"
            />
            <div className="flex items-center justify-between">
              <span className="text-2xl font-semibold">Harsh</span>
              <span className="py-1 px-4 bg-(--bg-black) text-(--text-white) rounded-full font-medium">
                Founder
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AgencyTeam;
