import { AnimatedHeader, UserSearchType } from "@/components";
import React from "react";
import { useState } from "react";
import { useTranslation } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation('common')
  const [searchType, setSearchType] = useState('paket')

  return (
    <section className="bg-main text-white">
      <div className="pt-[100px] pb-4 custom-container flex flex-col gap-4">
        <UserSearchType searchType={searchType} setSearchType={setSearchType} />
        <AnimatedHeader className="text-center font-black md:leading-none leading-[70px] uppercase lg:text-[80px] md:text-[70px] text-[60px]" text={t('hero.paket.title')}/>
        <p className="text-center font-regular">{t('hero.paket.desc')}</p>
      </div>
    </section>
  );
};

export default Hero;
