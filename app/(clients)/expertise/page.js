import { getAllServices } from "@/api/services/getAllservices";
import Expertise from "@/components/client/main/expertise/Expertise";
import React from "react";

const page = async () => {
  const services = await getAllServices();

  if (services) {
    return (
      <>
        <Expertise services={services} />
      </>
    );
  }
};

export default page;
