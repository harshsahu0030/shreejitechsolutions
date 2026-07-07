import { getAllServices } from "@/api/services/getAllservices";
import Expertise from "@/components/client/main/expertise/Expertise";

const page = async () => {
  const services = await getAllServices();

  return (
    <>
      <Expertise services={services} />
    </>
  );
};

export default page;
