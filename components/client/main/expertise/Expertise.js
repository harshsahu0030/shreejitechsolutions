"use client";

import CTA from "../../providers/CTA";
import ExpertiseHero from "./ExpertiseHero";
import ExpertiseServices from "./ExpertiseServices";
import ExpertisSkills from "./ExpertisSkills";

const Expertise = () => {
  return (
    <>
      <ExpertiseHero />
      <ExpertisSkills />
      <ExpertiseServices />
      <CTA />
    </>
  );
};

export default Expertise;
