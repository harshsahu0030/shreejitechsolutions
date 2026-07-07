const ProjectHero = () => {
  return (
    <section
      aria-label="project-hero"
      className="relative h-full py-15 pt-40 w-full responsives overflow-hidden flex flex-col"
    >
      <h1 className="text-[12vw] leading-[12vw] font-semibold">
        Projects <sup className="border-4 rounded-full p-5">99</sup>
      </h1>

      <hr className="border border-(--bg-black) my-10" />

      <p className="text-3xl xl:text-6xl font-medium">
        {`
 Each project prioritizes excellence with the goal of immersing your
visitors in a powerful and impactful universe. We believe that
nothing beats an immersive experience, and especially one that is
uniquely yours.
 `}
      </p>
    </section>
  );
};

export default ProjectHero;
