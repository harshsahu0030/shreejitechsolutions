import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoDotFill } from "react-icons/go";

const Breadcrumbs = () => {
  const path = usePathname();
  const pathSegments = path.split("/").filter(Boolean);

  return (
    <section
      aria-label="breadcrumbs"
      className="flex items-center gap-4 border-b-2 w-full"
    >
      {pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join("-")}`;
        const isLast = index === pathSegments.length - 1;
        const formattedSegment = segment.replace(/-/g, " ");

        return (
          <div
            key={href}
            className="flex items-center gap-2 uppercase text-sx md:text-sm font-semibold"
          >
            <GoDotFill />
            {isLast ? (
              <span>{formattedSegment}</span>
            ) : (
              <Link
                href={href}
                className="transitions hover:text-(--bg-orange)"
              >
                {formattedSegment}
              </Link>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Breadcrumbs;
