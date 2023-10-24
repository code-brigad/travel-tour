import { TextSubtitle, TextTitle } from "@/theme/Text";
import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { motion } from "framer-motion";

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
          <ul className="flex sm:flex-col flex-row gap-6 md:px-4 px-0">
            <motion.li
              initial={{
                scale: 0,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Image
                src={"/images/gallery/1.jpg"}
                width={500}
                height={500}
                alt="1"
                className="md:rounded-[30px] rounded-[15px]"
              />
            </motion.li>
            <motion.li
              initial={{
                scale: 0,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Image
                src={"/images/gallery/2.jpg"}
                width={500}
                height={500}
                alt="1"
                className="md:rounded-[30px] rounded-[15px]"
              />
            </motion.li>
          </ul>
        </li>
        <motion.li
          className="flex items-center justify-center"
          initial={{
            scale: 0,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.5,
            },
          }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <Image
            src={"/images/gallery/3.jpg"}
            width={500}
            height={500}
            alt="1"
            className="md:rounded-[30px] rounded-[15px] w-full"
          />
        </motion.li>
        <li className="flex items-center justify-center">
          <ul className="flex sm:flex-col flex-row gap-6 md:px-4 px-0">
            <motion.li
              initial={{
                scale: 0,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Image
                src={"/images/gallery/4.jpg"}
                width={500}
                height={500}
                alt="1"
                className="md:rounded-[30px] rounded-[15px]"
              />
            </motion.li>
            <motion.li
              initial={{
                scale: 0,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Image
                src={"/images/gallery/5.jpg"}
                width={500}
                height={500}
                alt="1"
                className="md:rounded-[30px] rounded-[15px]"
              />
            </motion.li>
          </ul>
        </li>
      </ul>
      {/* dns */}
    </section>
  );
};

export default Gallery;
