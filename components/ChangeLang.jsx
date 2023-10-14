import { IconCheck } from "@/icons";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";

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

export const ChangeLang = ({ open, setOpen }) => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const handleSetLng = (lng) => {
    router.push({ pathname, query }, asPath, {
      locale: lng,
    });
    setOpen(!open);
  };

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
              className="absolute right-[0px] top-[40px] text-black bg-white py-4 rounded-lg shadow-lg "
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

const flag = [
  {
    id: 1,
    img: "/images/uzbekistan.png",
    value: "uz",
  },
  {
    id: 2,
    img: "/images/russia.png",
    value: "ru",
  },
];

export const ChangeLangMobile = () => {
  const { i18n } = useTranslation('common')
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const handleSetLng = (lng) => {
    router.push({ pathname, query }, asPath, {
      locale: lng,
    });
  };
  return (
    <div className="flex w-full justify-start items-center">
      <ul className="flex flex-row gap-2 h-fit">
        {flag.map((flag) => {
          return (
            <li key={flag.id} onClick={() => handleSetLng(flag.value)}>
              <Image
                src={flag.img}
                alt={flag.value}
                width={200}
                height={200}
                className={`w-[35px] h-[35px] rounded-full cursor-pointer ${i18n.language == flag.value ? 'border-2' : ''}`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
