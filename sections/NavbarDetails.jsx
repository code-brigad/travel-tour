import { mulish, unbounded } from "@/public/assets/fonts";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  IconArrowBottom,
  IconBaloon,
  IconClose,
  IconInfo,
  IconLang,
  IconLocation,
  IconMenu,
  IconPlane,
} from "@/icons";
import { ChangeLang } from "@/components/ChangeLang";
import { TextSubtitle } from "@/theme/Text";

const links = [
  {
    id: 1,
    link: "/view/direction",
    icon: IconPlane,
    name: "Tur paketlar",
  },
  {
    id: 2,
    link: "/view/special",
    icon: IconBaloon,
    name: "Maxsus Tur paketlar",
  },
  {
    id: 3,
    link: "/view/locations",
    icon: IconLocation,
    name: "Joylashuv",
  },
  {
    id: 3,
    link: "/view/about",
    icon: IconInfo,
    name: "Kompaniya haqida",
  },
];

const NavbarDetails = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <motion.nav
      className={`bg-main bg-cube fixed w-full z-30 text-white ${mulish.className}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "linear", duration: 0.2 }}
    >
      <div className="custom-container py-4 flex flex-row justify-between items-center">
        <Link href={"/"} className={`${unbounded.className}`}>
          Sayohat
        </Link>
        <ul className="flex flex-row items-center gap-2">
          {links.map((link) => {
            return (
              <li key={link.id} className="md:block hidden">
                <Link
                  href={link.link}
                  className="font-regular p-2 rounded-[5px] hover:bg-white/10 transition-colors duration-500 flex flex-row items-center gap-2"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          <li className="relative md:block hidden">
            <div
              className={`hover:bg-white/10 rounded-[5px] p-2 cursor-pointer transition-colors duration-500 flex flex-row gap-1 ${
                open == true ? "bg-white/10" : ""
              }`}
              onClick={() => setOpen(!open)}
            >
              <IconLang />
              <div
                className={`transition-all duration-300 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              >
                <IconArrowBottom />
              </div>
            </div>
            <ChangeLang open={open} setOpen={setOpen} />
          </li>
          <li
            className="md:hidden block hover:bg-white/10 rounded-[5px] p-2 cursor-pointer transition-colors duration-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <IconMenu />
          </li>
        </ul>
        <Mobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </motion.nav>
  );
};

export default NavbarDetails;

export const Mobile = ({ menuOpen, setMenuOpen }) => {
  return (
    <AnimatePresence>
      {menuOpen && (
        <>
          <div
            className="w-full h-screen bg-[#172554]/[0.5] md:hidden block absolute top-0 left-0"
            onClick={() => setMenuOpen(!menuOpen)}
          ></div>
          <motion.nav
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              stiffness: 500,
              duration: 0.2,
            }}
            className="md:hidden block absolute top-0 left-0 z-40 bg-main max-w-[330px] w-full h-screen py-6"
          >
            <div className="h-[90%]">
              <div className="px-4 flex flex-row items-center justify-end mb-6">
                <div
                  className="hover:bg-white/10 rounded-[5px] p-2 cursor-pointer transition-colors duration-500"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <IconClose />
                </div>
              </div>
              <ul>
                {links.map((link) => {
                  return (
                    <li className="hover:bg-white/10 px-4 border-t border-white/20 last:border-b">
                      <Link
                        className="flex flex-row items-center gap-2 py-4"
                        href={link.link}
                      >
                        <link.icon />
                        <TextSubtitle className={'!text-white'}>{link.name}</TextSubtitle>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-full">
              <p className="text-center">
                <Link href={"/"}>
                  <TextSubtitle className={'!text-white'}>&copy; Sayohat 2023</TextSubtitle>
                </Link>
              </p>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};
