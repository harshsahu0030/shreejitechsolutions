"use client";

import Image from "next/image";
import Logo from "@/public/logo/logoLightTransparent.webp";
import { HiMenuAlt4 } from "react-icons/hi";
import Navbar from "./Navbar";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-40 responsives h-25 w-full flex justify-between items-end">
        {/* logo  */}
        <Link href="/">
          <Image
            src={Logo}
            alt="Shreeji-Text-Solutions-Logo"
            height={100}
            width={100}
            className="h-full object-contain hover:scale-105 transitions"
          />
        </Link>

        {/* menu  */}
        <button
          className="group/header-btn p-1 bg-(--bg-black) text-(--text-white) font-semibold uppercase rounded-full flex items-center justify-center transitions cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <span className="p-4">menu</span>
          <span className="h-2 w-2 group-hover/header-btn:h-10 group-hover/header-btn:w-10 rounded-full bg-(--bg-orange) text-xl flex justify-center items-center m-4 group-hover/header-btn:m-0 transitions">
            <HiMenuAlt4 className="hidden group-hover/header-btn:flex " />
          </span>
        </button>
      </header>

      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
