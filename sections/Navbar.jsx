import { young_serif } from "@/public/assets/fonts";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import {
  IconArrowBottom,
  IconCheck,
  IconClose,
  IconHelp,
  IconLang,
  IconMenu,
  IconPlane,
} from "@/icons";
import { useRouter } from "next/router";

const links = [
  {
    id: 1,
    link: "/direction",
    icon: IconPlane,
    name: "header.directory",
  },
  {
    id: 2,
    link: "/info",
    icon: IconHelp,
    name: "header.help",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation("common");
  return (
    <motion.nav
      className="bg-main fixed w-full text-white"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "linear", duration: 0.2 }}
    >
      <div className="custom-container py-4 flex flex-row justify-between items-center">
        <Link href={"/"} className={`${young_serif.className}`}>
          Sayohat
        </Link>
        <ul className="flex flex-row items-center gap-3">
          {links.map((link) => {
            return (
              <li key={link.id} className="sm:block hidden">
                <Link
                  href={link.link}
                  className="font-medium uppercase p-2 rounded-[5px] hover:bg-white/10 transition-colors duration-500 flex flex-row items-center gap-2"
                >
                  {t(link.name)}
                </Link>
              </li>
            );
          })}
          <li className="relative">
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
            className="sm:hidden block hover:bg-white/10 rounded-[5px] p-2 cursor-pointer transition-colors duration-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <IconMenu />
          </li>
        </ul>
        <Mobile menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      </div>
    </motion.nav>
  );
};

export default Navbar;

export const Mobile = ({ menuOpen, setMenuOpen }) => {
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{
            stiffness: 500,
            duration: 0.2,
          }}
          className="custom-container sm:hidden block absolute top-0 left-0 z-10 bg-main w-full h-screen py-4"
        >
          <div className="flex flex-row items-center justify-between">
            <Link href={"/"} className={`${young_serif.className}`}>
              Sayohat
            </Link>
            <div
              className="hover:bg-white/10 rounded-[5px] p-2 cursor-pointer transition-colors duration-500"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <IconClose />
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export const ChangeLang = ({ open, setOpen }) => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const handleSetLng = (lng) => {
    router.push({ pathname, query }, asPath, {
      locale: lng,
    });
    setOpen(!open);
  };

  const lng = [
    {
      id: 1,
      shortcut: "uz",
      name: "O`zbek tili",
    },
    {
      id: 2,
      shortcut: "ru",
      name: "Русский",
    },
  ];

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            <motion.nav
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{
                stiffness: 500,
                duration: 0.2,
              }}
              className="absolute left-[-88px] top-[50px] text-black bg-white py-4 rounded-lg shadow-lg   before:absolute before:block before:w-[14px] before:h-[14px] before:rotate-45 before:bg-white before:top-[-7px] before:left-[50%] before:translate-x-[-50%] before:z-[-1]"
            >
              <ul className="flex flex-col">
                {lng.map((data) => {
                  return (
                    <li
                      key={data.id}
                      className={`flex flex-row items-center justify-between min-w-[210px] gap-4 transition-colors duration-200 hover:bg-main/10 px-3 py-2 cursor-pointer ${
                        i18n.language == data.shortcut ? "text-main" : ""
                      }`}
                      onClick={() => handleSetLng(data.shortcut)}
                    >
                      <div className="flex flex-row gap-4">
                        <p className="uppercase">{data.shortcut}</p>
                        <p>{data.name}</p>
                      </div>
                      {i18n.language == data.shortcut ? <IconCheck /> : ""}
                    </li>
                  );
                })}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
