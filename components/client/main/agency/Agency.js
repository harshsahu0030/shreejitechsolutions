import AgencyClient from "./AgencyClient";
import AgencyHero from "./AgencyHero";
import AgencyTeam from "./AgencyTeam";
import AgencyVision from "./AgencyVision";

const Agency = () => {
  return (
    <>
      <AgencyHero />
      <AgencyVision />
      <AgencyTeam />
      <AgencyClient />
    </>
  );
};

export default Agency;
