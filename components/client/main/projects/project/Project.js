import CTA from "@/components/client/providers/CTA";
import ProjectBanner from "./ProjectBanner";
import { ProjectContent } from "./ProjectContent";
import ProjectMobile from "./ProjectMobile";

const Project = ({ project, bgColor }) => {
  return (
    <>
      <ProjectBanner project={project} bgColor={bgColor} />
      <ProjectContent project={project} bgColor={bgColor} />
      <ProjectMobile project={project} bgColor={bgColor} />
      <CTA bgColor={bgColor} />
    </>
  );
};

export default Project;
