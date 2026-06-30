"use client";

import Image from "next/image";
import agency02 from "@/public/agency/agency02.avif";
import { BsArrowDownCircle } from "react-icons/bs";

const ContactHero = () => {
  return (
    <section
      aria-label="aria-section"
      className="min-h-screen w-full py-25 pt-40 responsives"
    >
      {/* contact-header */}
      <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-5">
        <div className="flex flex-col justify-between gap-5 h-full">
          <h2 className="text-[12vw] leading-[12vw] font-semibold">Contact</h2>
          <p className="uppercase text-sm font-medium">
            This is where it happens
          </p>
        </div>

        <div className="text-xl font-medium w-full flex justify-end">
          <Image
            src={agency02}
            alt="agency-image"
            height={300}
            width={300}
            className="object-cover"
          />
        </div>
      </div>

      <hr className="border border-(--bg-black) my-10" />

      <div className="flex gap-10 items-center">
        <BsArrowDownCircle className="text-8xl" />
        <p className="text-3xl xl:text-5xl font-semibold">
          Follow the procedure calmly.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
