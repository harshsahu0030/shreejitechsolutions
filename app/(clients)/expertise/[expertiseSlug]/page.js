import { getSingleServices } from "@/api/services/getSingleService";
import Service from "@/components/client/main/expertise/service/Service";

const page = async ({ params }) => {
  const { expertiseSlug } = await params;

  const service = await getSingleServices({ slug: expertiseSlug });

  const colors = ["orange", "blue", "pink", "green", "white"];
  const bgColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <>
      <Service service={service} bgColor={bgColor} />
    </>
  );
};

export default page;
