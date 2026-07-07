import { getAllProjects } from "@/api/projects/getAllProjects";
import Projects from "@/components/client/main/projects/Projects";

const page = async () => {
  const projects = await getAllProjects();

  return (
    <>
      <Projects projects={projects} />
    </>
  );
};

export default page;
