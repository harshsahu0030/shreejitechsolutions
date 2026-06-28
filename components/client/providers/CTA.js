"use client";

import CommonLink from "./CommonLink";

const CTA = () => {
  return (
    <section
      aria-label="cta"
      className="flex flex-col items-center justify-center  w-full h-full bg-(--bg-orange) py-30"
    >
      <div className="h-full w-[80%] flex flex-col gap-10 items-center">
        <h2 className=" text-5xl md:text-8xl font-medium text-center">
          We challenge you to challenge us.
        </h2>
        <CommonLink label="contact us" url="/contact" />
      </div>
    </section>
  );
};

export default CTA;
