import React from "react";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { DatePicker } from "antd";

const BronPaket = () => {
  const { t } = useTranslation("common");
  const handleGetGoDate = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleGetBackDate = (date, dateString) => {
    console.log(date, dateString);
  };
  const classes =
    "py-6 px-3 text-black focus:ring-2 focus:ring-secondary bg-white outline-none transition-all duration-300 capitalize placeholder:opacity-80";
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="flex flex-col items-center gap-4"
    >
      <div className="grid w-full xl:grid-cols-5 grid-cols-4 xl:grid-rows-1 grid-rows-4 gap-[0.15rem]">
        <input
          type="text"
          className={`${classes} rounded-l-[10px] xl:rounded-r-none rounded-r-[10px] xl:col-span-1 col-span-4`}
          placeholder={t("hero.paket.input.where")}
        />
        <input
          type="text"
          className={`${classes} xl:rounded-l-none rounded-l-[10px] xl:rounded-r-none rounded-r-[10px] xl:col-span-1 col-span-4`}
          placeholder={t("hero.paket.input.where2")}
        />
        <DatePicker
          onChange={handleGetGoDate}
          placeholder={t("hero.paket.input.go")}
        />
        <DatePicker
          className="back-date"
          onChange={handleGetBackDate}
          placeholder={t("hero.paket.input.back")}
          renderExtraFooter={() => 'Qaytish uchun chipta kerak emas'}
        />
        <input
          type="text"
          className={`${classes} rounded-r-[10px] xl:rounded-l-none rounded-l-[10px] xl:col-span-1 col-span-4 col-start-1 xl:row-auto row-start-4`}
          placeholder={t("hero.paket.input.passenger")}
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="text-center py-2 bg-secondary px-6 uppercase rounded-md"
      >
        {t("hero.btn")}
      </motion.button>
    </motion.div>
  );
};

export default BronPaket;
