import {
  addressDetails,
  emailDetails,
  end,
  headerLinks,
  legalPolicy,
  phoneDetails,
  socialLinks,
} from "@/data/siteConfig";
import { NavLinks } from "../header/Navbar";
import Logo from "@/public/logo/logoDarkTransparent.webp";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="h-screen w-full bg-(--bg-black) text-(--text-white) flex flex-col gap-10 pt-20 responsives overflow-hidden">
      {/* top  */}
      <div className="w-full grid xl:grid-cols-2">
        {/* page links  */}
        <div className="w-ful grid grid-cols-2 py-10 border-t-2 border-(--bg-white)">
          <div className="flex flex-col gap-1">
            {headerLinks.map((item) => (
              <NavLinks key={item.url} item={item} />
            ))}
          </div>

          <div className="flex flex-col gap-1">
            {addressDetails.map((item) => (
              <NavLinks key={item.url} item={item} />
            ))}
            {emailDetails.map((item) => (
              <NavLinks key={item.url} item={item} />
            ))}
            {phoneDetails.map((item) => (
              <NavLinks key={item.url} item={item} />
            ))}
          </div>
        </div>

        {/* more links  */}
        <div className="w-full grid grid-cols-2 py-10 border-t-2 border-(--bg-white)">
          <div className="flex flex-col gap-1">
            {socialLinks.map((item) => (
              <NavLinks key={item.url} item={item} />
            ))}
          </div>

          <div className="flex flex-col gap-1">
            {legalPolicy.map((item) => (
              <NavLinks key={item.url} item={item} />
            ))}
            {end.map((item) => (
              <NavLinks key={item.url} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="nav-assets h-full w-full relative">
        <Image
          src={Logo}
          alt="Shreeji-Text-Solutions-Logo"
          height={800}
          width={800}
          loading="lazy"
          fetchPriority="low"
          className="absolute w-full top-0 left-0"
        />
      </div>
    </footer>
  );
};

export default Footer;
