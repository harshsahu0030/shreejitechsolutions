"use client";

import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

const CommonLink = ({ label, url }) => {
  return (
    <Link
      href={url}
      className="group/common-btn p-1 font-semibold uppercase rounded-full flex items-center justify-center transitions cursor-pointer w-fit hover:bg-(--bg-black) border-2 hover:text-(--text-white) hover:border-(--bg-black)"
    >
      <span className="p-2 xl:p-3 uppercase">{label}</span>
      <span className="h-2 w-2 group-hover/common-btn:h-10 group-hover/common-btn:w-10 rounded-full bg-(--bg-black) text-xl flex justify-center items-center m-2 xl:m-4 group-hover/common-btn:m-0 transitions group-hover/common-btn:bg-(--bg-white)">
        <LuArrowUpRight className="hidden group-hover/common-btn:flex text-(--text-black)" />
      </span>
    </Link>
  );
};

export default CommonLink;
