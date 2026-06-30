"use client";

import CTA from "@/components/client/providers/CTA";
import ServiceHero from "./ServiceHero";

const Service = ({ service = {}, bgColor = "orange" }) => {
  return (
    <>
      <ServiceHero service={service} bgColor={bgColor} />
      <CTA
        label="Interested in our expertise"
        description="It's this way"
        bgColor={bgColor}
      />
    </>
  );
};

export default Service;
