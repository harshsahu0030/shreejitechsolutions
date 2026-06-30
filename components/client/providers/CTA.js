"use client";

import CommonLink from "./CommonLink";

const CTA = ({
  label = "We challenge you to challenge us.",
  description = "",
  bgColor = "orange",
}) => {
  return (
    <section
      aria-label="cta"
      className={`flex flex-col items-center justify-center  w-full h-full  py-30 bg-(--bg-${bgColor})`}
    >
      <div className="h-full w-[80%] flex flex-col gap-10 items-center">
        <h2 className=" text-5xl md:text-8xl font-medium text-center">
          {label}
        </h2>

        <p className="text-xl font-medium">{description}</p>

        <p className="font-semibold"></p>
        <CommonLink label="contact us" url="/contact" />
      </div>
    </section>
  );
};

export default CTA;
