"use client";

import Image from "next/image";
import Logo from "@/public/logo/logoDarkTransparent.webp";
import HighThumbnail from "@/public/highThumbnail.jpg";
import High from "@/public/high.mp4";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import {
  addressDetails,
  emailDetails,
  headerLinks,
  phoneDetails,
  socialLinks,
} from "@/data/siteConfig";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

export const NavLinks = ({ item }) => {
  return (
    <Link
      href={item.url}
      className="nav-links uppercase text-(--text-white) font-semibold hover:text-(--bg-orange)"
    >
      {item.label}
    </Link>
  );
};

const Navbar = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();
  const navRef = useRef(null);
  const tl = useRef(null);
  const videoRef = useRef(null);

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        .from(navRef.current, {
          y: "100%",
          opacity: 0,
          duration: 0.3,
        })
        .from(".nav-links", {
          y: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.2,
        })
        .from(".nav-assets", {
          y: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.2,
        });
    },
    { scope: navRef },
  );

  useEffect(() => {
    const video = videoRef.current;

    if (isOpen) {
      tl.current?.play();
      if (video) void video.play();
    } else {
      tl.current?.reverse();
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  return (
    <nav
      ref={navRef}
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={`fixed top-0 left-0 responsives z-50 h-screen w-full bg-(--bg-black) overflow-hidden flex flex-col${
        isOpen ? "" : " pointer-events-none"
      }`}
    >
      <div className="responsive min-h-25 max-h-25 flex justify-between items-end">
        <Link href="/" className="h-full w-fit flex items-end">
          <Image
            src={Logo}
            alt="Shreeji-Text-Solutions-Logo"
            height={200}
            width={200}
            className="h-20 w-auto object-contain hover:scale-105 transitions"
          />
        </Link>

        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
          className="p-4 rounded-full bg-(--bg-orange) text-(--text-black) hover:scale-110 cursor-pointer transitions text-xl"
        >
          <IoClose />
        </button>
      </div>

      <div className="w-full py-5 grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div className="flex xl:justify-center items-center">
          <div className="flex flex-col gap-4">
            {headerLinks.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                className="nav-links text-4xl xl:text-5xl font-medium text-(--text-white) hover:text-(--bg-orange)"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="h-full w-full flex flex-col justify-between gap-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col">
              {socialLinks.map((item) => (
                <NavLinks key={item.url} item={item} />
              ))}
            </div>

            <div className="flex flex-col">
              {addressDetails.map((item) => (
                <NavLinks key={item.url} item={item} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div className="flex flex-col">
              {emailDetails.map((item) => (
                <NavLinks key={item.url} item={item} />
              ))}
            </div>

            <div className="flex flex-col">
              {phoneDetails.map((item) => (
                <NavLinks key={item.url} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full grid grid-cols-1 xl:grid-cols-2 gap-5">
        <div className="nav-assets  items-end hidden xl:flex ">
          <video
            ref={videoRef}
            className="h-[300px] w-[500px] object-cover rounded-lg aspect-video"
            loop
            muted
            playsInline
            preload="none"
            poster={HighThumbnail}
          >
            <source src={High} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="nav-assets h-full w-full relative">
          <Image
            src={Logo}
            alt="Shreeji-Text-Solutions-Logo"
            height={500}
            width={500}
            loading="lazy"
            fetchPriority="low"
            className="absolute w-full top-0 left-0"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
