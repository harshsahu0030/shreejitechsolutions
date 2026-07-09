"use client";

import Breadcrumbs from "@/components/client/providers/Breadcrumbs";
import CommonLink from "@/components/client/providers/CommonLink";
import placeholderImage from "@/public/placeholderImage.webp";
import Image from "next/image";

const ProjectBanner = ({ project, bgColor }) => {
  return (
    <section
      aria-label="project-banner"
      className={`h-full bg-(--bg-${bgColor}) responsives pt-30 flex flex-col gap-10`}
    >
      <Breadcrumbs />

      {/* heading  */}
      <div className="flex flex-col xl:flex-row justify-between items-center gap-5">
        <h1 className="text-5xl xl:text-8xl font-medium">
          {project?.projectsDeatil?.mainheading}
        </h1>
        <CommonLink
          target="_blank"
          label="See Project"
          url={project?.projectsDeatil?.projectUrl}
        />
      </div>
      <h2 className="text-2xl  xl:text-4xl font-medium">
        {project?.projectsDeatil?.mainSubHeading}
      </h2>

      <Image
        src={project?.projectsDeatil?.sectionImage1?.node?.sourceUrl}
        alt="agency-image"
        height={800}
        width={800}
        className="w-full object-contain"
        preload="true"
        placeholder="blur"
        blurDataURL={placeholderImage}
      />
    </section>
  );
};

export default ProjectBanner;
