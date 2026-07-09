import ProjectBanner from "./ProjectBanner";
import { ProjectContent } from "./ProjectContent";
import ProjectMobile from "./ProjectMobile";

const Project = ({ project, bgColor }) => {
  console.log(project);

  return (
    <>
      <ProjectBanner project={project} bgColor={bgColor} />
      <ProjectContent project={project} bgColor={bgColor} />
      <ProjectMobile project={project} bgColor={bgColor} />
    </>
  );
};

export default Project;
