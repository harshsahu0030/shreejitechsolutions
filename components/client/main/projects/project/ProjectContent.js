import Image from "next/image";
import placeholderImage from "@/public/placeholderImage.webp";

export const ProjectContent = ({ project, bgColor }) => {
  return (
    <section
      aria-label="project-content"
      className={`flex flex-col gap-10 bg-(--bg-${bgColor}) py-20`}
    >
      <p className="text-2xl xl:text-4xl font-medium responsives">
        {project?.projectsDeatil?.projectDetails}
      </p>

      <Image
        src={project?.projectsDeatil?.sectionImage2?.node?.sourceUrl}
        alt="agency-image"
        height={800}
        width={800}
        className="w-full object-contain responsives"
        preload="true"
        placeholder="blur"
        blurDataURL={placeholderImage}
      />

      <div className="h-full w-full bg-(--bg-black) responsives flex justify-center items-end  gap-5 py-20">
        <Image
          src={project?.projectsDeatil?.desktopImage1?.node?.sourceUrl}
          alt="agency-image"
          height={200}
          width={150}
          className="object-contain"
          preload="true"
          placeholder="blur"
          blurDataURL={placeholderImage}
        />
        <Image
          src={project?.projectsDeatil?.desktopImage2?.node?.sourceUrl}
          alt="agency-image"
          height={200}
          width={150}
          className="object-contain pt-20"
          preload="true"
          placeholder="blur"
          blurDataURL={placeholderImage}
        />
      </div>
    </section>
  );
};
