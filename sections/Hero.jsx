import { AnimatedHeader, UserSearchType } from "@/components";
import React from "react";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { BronHotel, BronPaket } from ".";

const Hero = () => {
  const { t } = useTranslation("common");
  const [searchType, setSearchType] = useState("paket");

  return (
    <section className="bg-cube bg-main text-white">
      <div className="pt-[100px] pb-[100px] custom-container flex flex-col gap-4">
        <UserSearchType searchType={searchType} setSearchType={setSearchType} />
        {searchType == "paket" ? (
          <>
            <AnimatedHeader
              className="text-center font-black md:leading-none leading-[70px] uppercase lg:text-[80px] md:text-[70px] text-[60px]"
              text={t("hero.paket.title")}
            />
            <p className="text-center font-regular">{t("hero.paket.desc")}</p>
            <BronPaket />
          </>
        ) : (
          <>
            <AnimatedHeader
              className="text-center font-black md:leading-none leading-[70px] uppercase lg:text-[80px] md:text-[70px] text-[60px]"
              text={"Mehmonxona"}
            />
            <p className="text-center font-regular">{t("hero.paket.desc")}</p>
            <BronHotel />
          </>
        )}

      </div>
    </section>
  );
};

export default Hero;
