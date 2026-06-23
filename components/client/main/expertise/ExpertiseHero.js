import React from "react";

const ExpertiseHero = () => {
  return (
    <section
      aria-label="expertise-hero"
      className="relative min-h-screen py-25 w-full responsives overflow-hidden"
    >
      {/* top  */}
      <div className="w-full grid xl:grid-cols-2">
        <div className="h-full  flex items-end">
          <p className="text-[9vw] leading-[9vw] font-medium">aim for</p>
        </div>
        <div className="w-full flex justify-end items-end">
          <p className="uppercase text-sm font-medium w-1/2 text-end">
            Web design and development agency in Lyon
          </p>
        </div>
      </div>

      <hr className="border-2 border-(--bg-black) my-5" />

      <div className="w-full grid xl:grid-cols-2">
        <div className="h-full  flex items-end">
          <p className="uppercase text-sm font-medium w-1/2">
            we create websites with love and passion
          </p>
        </div>
        <div className="w-full flex justify-end">
          <p className="text-[9vw] leading-[9vw] font-medium">quality only</p>
        </div>
      </div>

      {/* bottom  */}
      <div className="pt-30">
        <p className="text-3xl xl:text-5xl">
          {`Regardless of the latest tech or trends, or even your most
unconventional requests, we specialize in crafting bespoke
websites and digital experiences. Our mission is to equip you with
the most innovative and user‑friendly tools imaginable.`}
        </p>
      </div>

      {/* circle  */}
      <div className="-z-1 h-[50vw] w-[50vw] bg-(--bg-blue) absolute top-[-20vw] left-1/2 -translate-x-1/2  rounded-full"></div>
      <div className="-z-2 h-[40vw] w-[40vw] bg-(--bg-orange) absolute rounded-full right-0  top-1/2  -translate-y-1/2"></div>
    </section>
  );
};

export default ExpertiseHero;
