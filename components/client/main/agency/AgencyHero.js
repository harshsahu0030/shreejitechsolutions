import React from "react";

const AgencyHero = () => {
  return (
    <section
      areia-label="agency-hero"
      className="min-h-screen py-25 w-full responsives "
    >
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
