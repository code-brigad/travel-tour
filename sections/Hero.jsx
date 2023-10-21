import { AnimatedHeader, UserSearchType } from "@/components";
import React from "react";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { BronHotel, BronPaket } from ".";
import { unbounded } from "@/public/assets/fonts";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation("common");
  const [searchType, setSearchType] = useState("paket");

  return (
    <section className="bg-cube bg-main text-white">
      <div className="pt-[150px] pb-[150px] custom-container flex flex-col gap-6">
        {/* <UserSearchType searchType={searchType} setSearchType={setSearchType} /> */}
        {/* {searchType == "paket" ? (
          <>
            <AnimatedHeader
              className={`text-center font-black md:leading-none leading-[70px] uppercase lg:text-[80px] md:text-[70px] text-[60px] ${unbounded.className}`}
              text={t("hero.paket.title")}
            />
            <p className="text-center font-regular">{t("hero.paket.desc")}</p>
            <BronPaket />
          </>
        ) : (
          <>
            <AnimatedHeader
              className={`text-center font-black md:leading-none leading-[70px] uppercase lg:text-[80px] md:text-[70px] text-[60px] ${unbounded.className}`}
              text={"Mehmonxona"}
            />
            <p className="text-center font-regular">{t("hero.paket.desc")}</p>
            <BronHotel />
          </>
        )} */}
        <AnimatedHeader
          className={`text-center font-black md:leading-none leading-[70px] uppercase lg:text-[80px] md:text-[60px] text-[50px] ${unbounded.className}`}
          text={t("hero.paket.title")}
        />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center font-regular text-[16px]">{t("hero.paket.desc")}</motion.p>
        <BronPaket />
      </div>
    </section>
  );
};

export default Hero;
