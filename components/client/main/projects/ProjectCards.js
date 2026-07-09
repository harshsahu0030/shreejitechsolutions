"use client";

import CustomCursor from "@/components/client/providers/CustomCursor";
import { useRef } from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

const ProjectCards = ({ projects = [] }) => {
  let colors = ["pink", "orange", "blue", "green"];

  const customRef = useRef(null);

  console.log(projects);

  if (projects) {
    return (
      <section
        ref={customRef}
        aria-label="project-cards"
        className="min-h-screen w-full relative"
      >
        <CustomCursor customRef={customRef} />

        <div className="grid grid-cols-1 xl:grid-cols-2">
          {projects?.map((item, index) => {
            const cycleIndex = index % colors.length;

            return (
              <Link key={index} href={`/projects/${item?.slug}`}>
                <ProjectCard project={item} cycleIndex={cycleIndex} />
              </Link>
            );
          })}
        </div>
      </section>
    );
  }
};

export default ProjectCards;
