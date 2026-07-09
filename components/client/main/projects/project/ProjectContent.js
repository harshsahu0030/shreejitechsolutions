import Image from "next/image";
import placeholderImage from "@/public/placeholderImage.webp";

export const ProjectContent = ({ project, bgColor }) => {
  return (
    <section
      aria-label="project-content"
      className={`flex flex-col gap-10 bg-(--bg-${bgColor}) py-20`}
    >
      <p className="text-4xl font-medium responsives">
        {project?.projectsDeatil?.projectDetails}
      </p>

      <Image
        src={project?.projectsDeatil?.sectionImage2?.node?.sourceUrl}
        alt="agency-image"
        height={800}
        width={800}
        className="w-full object-contain"
        preload="true"
        placeholder="blur"
        blurDataURL={placeholderImage}
      />

      <div className="w-full bg-(--bg-black) responsives flex flex-col xl:flex-row items-end gap-5 py-30">
        <Image
          src={project?.projectsDeatil?.desktopImage1?.node?.sourceUrl}
          alt="agency-image"
          height={1500}
          width={1500}
          className="w-full object-contain"
          preload="true"
          placeholder="blur"
          blurDataURL={placeholderImage}
        />
        <Image
          src={project?.projectsDeatil?.desktopImage2?.node?.sourceUrl}
          alt="agency-image"
          height={1500}
          width={1500}
          className="w-full object-contain pt-20"
          preload="true"
          placeholder="blur"
          blurDataURL={placeholderImage}
        />
      </div>
    </section>
  );
};
