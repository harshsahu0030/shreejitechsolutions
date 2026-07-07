import CTA from "../../providers/CTA";
import ProjectCards from "./project/ProjectCards";
import ProjectHero from "./ProjectHero";

const Projects = ({ projects = { projects } }) => {
  return (
    <>
      <ProjectHero />
      <ProjectCards projects={projects} />
      <CTA bgColor="green" />
    </>
  );
};

export default Projects;
