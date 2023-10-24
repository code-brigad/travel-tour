import { TextSubtitle, TextTitle } from "@/theme/Text";
import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const Gallery = () => {
  const { t } = useTranslation("common");
  return (
    <section className="custom-container py-8 flex flex-col gap-8">
      <div>
        <TextTitle>{t("gallery.title")}</TextTitle>
        <TextSubtitle className={"capitalize"}>
          {t("gallery.desc")}
        </TextSubtitle>
      </div>
      <ul className="w-full flex sm:flex-row flex-col sm:gap-6 gap-6">
        <li className="flex items-center justify-center">
          <ul className="flex sm:flex-col flex-row gap-6 sm:px-4 px-0">
            <li>
              <Image
                src={"/images/gallery/1.jpg"}
                width={500}
                height={500}
                alt="1"
                className="sm:rounded-[30px] rounded-[20px]"
              />
            </li>
            <li>
              <Image
                src={"/images/gallery/2.jpg"}
                width={500}
                height={500}
                alt="1"
                className="sm:rounded-[30px] rounded-[20px]"
              />
            </li>
          </ul>
        </li>
        <li className="flex items-center justify-center">
          <Image
            src={"/images/gallery/3.jpg"}
            width={500}
            height={500}
            alt="1"
            className="sm:rounded-[30px] rounded-[20px] w-full"
          />
        </li>
        <li className="flex items-center justify-center">
          <ul className="flex sm:flex-col flex-row gap-6 sm:px-4 px-0">
            <li>
              <Image
                src={"/images/gallery/4.jpg"}
                width={500}
                height={500}
                alt="1"
                className="sm:rounded-[30px] rounded-[20px]"
              />
            </li>
            <li>
              <Image
                src={"/images/gallery/5.jpg"}
                width={500}
                height={500}
                alt="1"
                className="sm:rounded-[30px] rounded-[20px]"
              />
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Gallery;
