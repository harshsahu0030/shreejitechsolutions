"use client";

import Image from "next/image";
import placeholderImage from "@/public/placeholderImage.webp";

const ProjectCard = ({ project, cycleIndex }) => {
  let colors = ["pink", "orange", "blue", "olive"];

  return (
    <div
      className={`min-h-[50vh] xl:min-h-[80vh] w-full p-5 md:p-15 r bg-(--bg-${colors[cycleIndex]})`}
    >
      <div className="h-full w-full flex flex-col items-center hover:scale-110 transitions">
        <h3 className="text-4xl font-semibold w-full text-center">
          {project?.projectsDeatil?.mainheading}
        </h3>

        <Image
          src={project?.featuredImage?.node?.sourceUrl}
          alt="agency-image"
          height={300}
          width={300}
          className="w-full h-full object-contain p-5"
          preload="true"
          placeholder="blur"
          blurDataURL={placeholderImage}
        />

        <p className="text-2xl font-semibold w-full text-center">
          {project?.projectsDeatil?.mainSubHeading}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
