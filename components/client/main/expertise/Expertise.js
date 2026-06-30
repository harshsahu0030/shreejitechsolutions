"use client";

import CTA from "../../providers/CTA";
import ExpertiseHero from "./ExpertiseHero";
import ExpertiseServices from "./ExpertiseServices";
import ExpertisSkills from "./ExpertisSkills";

const Expertise = (services) => {
  return (
    <>
      <ExpertiseHero />
      <ExpertisSkills />
      <ExpertiseServices services={services} />
      <CTA />
    </>
  );
};

export default Expertise;
