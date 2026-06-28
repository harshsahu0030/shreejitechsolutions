const ProjectHero = () => {
  return (
    <section
      aria-label="project-hero"
      className="relative min-h-screen py-25 pt-40 w-full responsives overflow-hidden flex flex-col gap-15"
    >
      <h1 className="text-[12vw] leading-[12vw] font-semibold">Projects </h1>

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
