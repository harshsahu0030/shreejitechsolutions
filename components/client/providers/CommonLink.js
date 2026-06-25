"use client";

import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

const CommonLink = ({ label, url }) => {
  return (
    <Link
      href={url}
      className="group/header-btn p-1 bg-(--bg-black) text-(--text-white) font-semibold uppercase rounded-full flex items-center justify-center transitions cursor-pointer w-fit"
    >
      <span className="p-2 xl:p-4 uppercase">{label}</span>
      <span className="h-2 w-2 group-hover/header-btn:h-10 group-hover/header-btn:w-10 rounded-full bg-(--bg-white) text-xl flex justify-center items-center m-2 xl:m-4 group-hover/header-btn:m-0 transitions">
        <LuArrowUpRight className="hidden group-hover/header-btn:flex text-(--text-black)" />
      </span>
    </Link>
  );
};

export default CommonLink;
