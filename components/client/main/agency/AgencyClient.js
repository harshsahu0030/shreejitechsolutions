import React from "react";

const AgencyClient = () => {
  return (
    <section
      aria-label="agency-clients"
      className="min-h-screen w-full bg-(--bg-orange) responsives py-25"
    >
      {/* team-header */}
      <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-5">
        <h2 className="text-[12vw] leading-[12vw] font-semibold">Clients</h2>

        <div className="flex w-full justify-end gap-10 items-center">
          <span className="text-3xl  font-semibold text-nowrap">
            +50 Clients
          </span>
          <span className="uppercase text-sm font-medium">
            countless brands have already <br />
            placed their trust in us
          </span>
        </div>
      </div>

      {/* client-swiper  */}
    </section>
  );
};

export default AgencyClient;
