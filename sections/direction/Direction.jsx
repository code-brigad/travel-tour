import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { TextSubtitle } from "@/theme/Text";
import { IconMoney, IconTelegram } from "@/icons";
import { useState } from "react";
import { useEffect } from "react";
import { replaceWithLocale } from "@/layouts/replaceWithLocale";
import Head from "next/head";
import Image from "next/image";
import Plane from "@/icons/Plane";
import axios from "@/config/axios.config";
import Link from "next/link";
import { Error, Loading } from "@/components";

const Direction = () => {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const [tourPackage, setTourPackage] = useState([]);
  console.log(tourPackage, "tour");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getPackages = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const { data } = await axios.get(`travel/${router.query.id}`);
      setTourPackage(data);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getPackages();
  }, [router]);

  if (isLoading) {
    return (
      <div className="custom-container py-[150px]">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="custom-container py-[150px]">
        <Error />
      </div>
    );
  }
  return (
    <>
      <section className="sm:pt-[150px] pt-[100px] pb-[50px] flex flex-col gap-6 custom-container">
        <div className="w-full">
          <Image
            src={"/images/big-placeholder.png"}
            alt="placeholder"
            width={500}
            height={500}
            className="w-full rounded-[20px]"
          />
        </div>
        <div className="sm:w-fit w-full rounded-[5px] text-white flex sm:flex-row flex-col sm:items-center items-start sm:gap-4 gap-2">
          <div className="sm:w-fit w-full flex flex-row items-center gap-2 bg-main px-4 py-4 rounded-[10px]">
            <Plane fatherClass={"fill-white rotate-[50deg]"} />
            <TextSubtitle className={"!text-white capitalize"}>
              {t("openpackage.from")}:{" "}
              <span className="font-semibold">
                {tourPackage[replaceWithLocale(router, "from_")]}
              </span>
            </TextSubtitle>
          </div>
          <div className="sm:w-fit w-full flex flex-row items-center gap-2 bg-main px-4 py-4 rounded-[10px]">
            <Plane fatherClass={"fill-white rotate-[130deg]"} />
            <TextSubtitle className={"!text-white capitalize"}>
              {t("openpackage.where")}:{" "}
              <span className="font-semibold">
                {tourPackage[replaceWithLocale(router, "where_")]}
              </span>
            </TextSubtitle>
          </div>
          <div className="sm:w-fit w-full flex flex-row items-center gap-2 bg-main px-4 py-4 rounded-[10px]">
            <IconMoney fatherClass={""} />
            <TextSubtitle className={"!text-white capitalize"}>
              {t("openpackage.price")}:{" "}
              <span className="font-semibold">
                {tourPackage.price} so&apos;m
              </span>
            </TextSubtitle>
          </div>
        </div>
        <div className="bg-main/[0.03] p-4 border rounded-[10px] flex flex-col gap-2">
          <TextSubtitle className={"text-start !text-black"}>
            {tourPackage[replaceWithLocale(router, "description_")]}
          </TextSubtitle>
        </div>
        <div className="bg-main/[0.03] p-4 border rounded-[10px] flex flex-col gap-2">
          <TextSubtitle className={"text-start !text-black"}>
            {t("openpackage.from")}:{" "}
            {tourPackage[replaceWithLocale(router, "from_")]}
          </TextSubtitle>
        </div>
        <div className="bg-main/[0.03] p-4 border rounded-[10px] flex flex-col gap-2">
          <TextSubtitle className={"text-start !text-black"}>
            {t("openpackage.where")}:{" "}
            {tourPackage[replaceWithLocale(router, "where_")]}
          </TextSubtitle>
        </div>
        <div className="bg-main/[0.03] p-4 border rounded-[10px] flex flex-col gap-2">
          <TextSubtitle className={"text-start !text-black"}>
            {t("openpackage.days")}: {tourPackage.days} {t("openpackage.day")} /{" "}
            {tourPackage.days - 1} {t("openpackage.night")}
          </TextSubtitle>
        </div>
        <div className="bg-main/[0.03] p-4 border rounded-[10px] flex flex-col gap-2">
          <TextSubtitle className={"text-start !text-black"}>
            {t("openpackage.fly")}: {tourPackage.fly_date}
          </TextSubtitle>
        </div>
        <div className="bg-main p-4 border rounded-[10px] flex flex-col gap-2">
          <TextSubtitle className={"text-start !text-white"}>
            {t("openpackage.price")}: {tourPackage.price} So&apos;m
          </TextSubtitle>
        </div>
        <Link href={"/"}>
          <div className="sm:w-fit w-full flex flex-row items-center gap-2 bg-main/[0.03] p-4 border border-main rounded-[10px]">
            <IconTelegram childClass={"!stroke-main"} />
            <TextSubtitle className={"!text-black capitalize"}>
              {t("openpackage.manager")}
            </TextSubtitle>
          </div>
        </Link>
      </section>
    </>
  );
};

export default Direction;
