import placeholderImage from "@/public/placeholderImage.webp";
import Image from "next/image";

const ProjectMobile = ({ project, bgColor }) => {
  return (
    <section
      aria-label="project-mobile"
      className={`py-20 flex flex-col xl:flex-row justify-center items-center gap-10 responsives`}
    >
      <Image
        src={project?.projectsDeatil?.mobileImage1?.node?.sourceUrl}
        alt="agency-image"
        height={300}
        width={300}
        className="object-contain"
        preload="true"
        placeholder="blur"
        blurDataURL={placeholderImage}
      />
      <Image
        src={project?.projectsDeatil?.mobileImage2?.node?.sourceUrl}
        alt="agency-image"
        height={300}
        width={300}
        className="object-contain"
        preload="true"
        placeholder="blur"
        blurDataURL={placeholderImage}
      />
    </section>
  );
};

export default ProjectMobile;
