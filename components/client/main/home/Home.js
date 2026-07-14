"use client";

import ExpertisSkills from "../expertise/ExpertisSkills";
import Creativity from "./Creativity";
import HomeHero from "./HomeHero";
import OurAgency from "./OurAgency";

const Home = () => {
  return (
    <>
      <HomeHero />
      <Creativity />
      <ExpertisSkills />
      <OurAgency />
    </>
  );
};

export default Home;
