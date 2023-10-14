import React from "react";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

const BronPaket = () => {
  const { t } = useTranslation("common");
  const classes =
    "py-6 px-3 text-black focus:ring-2 focus:ring-secondary bg-white outline-none transition-all duration-300 capitalize";
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="grid w-full xl:grid-cols-5 grid-cols-4 xl:grid-rows-1 grid-rows-3 gap-[0.15rem]">
        <input
          type="text"
          className={`${classes} rounded-l-[10px] xl:rounded-r-none rounded-r-[10px] xl:col-span-1 col-span-4`}
          placeholder={t("hero.paket.input.where")}
        />
        <input
          type="text"
          className={`${classes} xl:rounded-l-none rounded-l-[10px] xl:col-span-1 col-span-2 xl:row-auto row-start-2`}
          placeholder={t("hero.paket.input.where2")}
        />
        <input
          type="text"
          className={`${classes} xl:rounded-r-none rounded-r-[10px] xl:col-span-1 col-span-2 col-start-3 xl:row-auto row-start-2`}
          placeholder={t("hero.paket.input.go")}
        />
        <input
          type="text"
          className={`${classes} xl:rounded-l-none rounded-l-[10px] xl:col-span-1 col-span-2 xl:row-auto row-start-3`}
          placeholder={t("hero.paket.input.back")}
        />
        <input
          type="text"
          className={`${classes} rounded-r-[10px] xl:col-span-1 col-span-2 col-start-3 xl:row-auto row-start-3`}
          placeholder={t("hero.paket.input.passenger")}
        />
      </div>
      <motion.button whileHover={{ scale: 1.1 }} className="text-center py-2 bg-secondary px-6 uppercase rounded-md">{t('hero.btn')}</motion.button>
    </div>
  );
};

export default BronPaket;
