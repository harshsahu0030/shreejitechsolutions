import { getSingleProject } from "@/api/projects/getSingleProject";
import Project from "@/components/client/main/projects/project/Project";

const page = async ({ params }) => {
  const { projectSlug } = await params;

  const project = await getSingleProject({ slug: projectSlug });

  const colors = ["orange", "blue", "pink", "green"];
  const bgColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <>
      <Project project={project} bgColor={bgColor} />
    </>
  );
};

export default page;
