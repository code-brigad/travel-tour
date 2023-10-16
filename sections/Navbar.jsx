import { poppins, young_serif } from "@/public/assets/fonts";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "next-i18next";
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
import { ChangeLang, ChangeLangMobile } from "@/components/ChangeLang";

const links = [
  {
    id: 1,
    link: "/direction",
    icon: IconPlane,
    name: "header.directory",
  },
  {
    id: 2,
    link: "/special",
    icon: IconBaloon,
    name: "header.help",
  },
  {
    id: 3,
    link: "/locations",
    icon: IconLocation,
    name: "header.location"
  },
  {
    id: 3,
    link: "/about",
    icon: IconInfo,
    name: "header.about"
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation("common");
  return (
    <motion.nav
      className={`bg-main bg-cube fixed w-full z-30 text-white ${poppins.className}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "linear", duration: 0.2 }}
    >
      <div className="custom-container py-4 flex flex-row justify-between items-center">
        <Link href={"/"} className={`${young_serif.className}`}>
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
                  {t(link.name)}
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

export default Navbar;

export const Mobile = ({ menuOpen, setMenuOpen }) => {
  const { t } = useTranslation("common");
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
            <div className="px-4 flex flex-row items-center justify-between mb-6">
              <ChangeLangMobile />
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
                  <li className="hover:bg-white/10 px-4">
                    <Link
                      className="flex flex-row items-center gap-2 py-2"
                      href={link.link}
                    >
                      <link.icon />
                      <p>{t(link.name)}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};
