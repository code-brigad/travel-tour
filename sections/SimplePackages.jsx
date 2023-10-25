import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { TextHeading, TextSubtitle, TextTitle } from "@/theme/Text";
import { Error, Loading, NoData } from "@/components";
import { motion } from "framer-motion";
import Image from "next/image";
import axios from "@/config/axios.config";
import Link from "next/link";
import formatMoney from "@/layouts/formatMoney";

const SimplePackages = () => {
  const { t, i18n } = useTranslation("common");
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getPackages = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const { data } = await axios.get("travel/");
      setPackages(data);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getPackages();
  }, []);

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.5,
      },
    },
  };
  
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  if (packages.length == 0) {
    return <NoData />;
  }

  return (
    <section className="custom-container py-8 flex flex-col gap-8">
      <div>
        <TextTitle>{t("simple.title")}</TextTitle>
        <TextSubtitle>{t("simple.desc")}</TextSubtitle>
      </div>
      <motion.ul
        className="grid md:grid-cols-4 grid-cols-2 gap-3"
        initial="offscreen"
        whileInView="onscreen"
        transition={{
          delayChildren: 0.1,
          staggerChildren: 0.2,
        }}
        viewport={{ once: true, amount: 0.4 }}
      >
        {packages?.map((data) => {
          return (
            <motion.li key={data.id} variants={cardVariants}>
              <div className="cursor-pointer w-full h-auto">
                <Link
                  href={{
                    pathname: "/view/direction/[id]",
                    query: { id: data.id },
                  }}
                >
                  <Image
                    src={data.image}
                    alt={data.createdAt}
                    width={200}
                    height={200}
                    className="w-full h-full aspect-square border object-cover rounded-[20px]"
                  />
                </Link>
              </div>
              <TextHeading className={"capitalize"}>
                {data.where_uz}
              </TextHeading>
              <div className="flex flex-row gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  fill="none"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  color="#000000"
                  className="fill-gray-400 sm:block hidden rotate-[40deg]"
                >
                  <path
                    className="stroke-gray-400"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 4.5v4.667a.6.6 0 0 1-.282.51l-7.436 4.647a.6.6 0 0 0-.282.508v.9a.6.6 0 0 0 .746.582l6.508-1.628a.6.6 0 0 1 .746.582v2.96a.6.6 0 0 1-.205.451l-2.16 1.89c-.458.402-.097 1.151.502 1.042l3.256-.591a.6.6 0 0 1 .214 0l3.256.591c.599.11.96-.64.502-1.041l-2.16-1.89a.6.6 0 0 1-.205-.452v-2.96a.6.6 0 0 1 .745-.582l6.51 1.628a.6.6 0 0 0 .745-.582v-.9a.6.6 0 0 0-.282-.508l-7.436-4.648a.6.6 0 0 1-.282-.509V4.5a1.5 1.5 0 0 0-3 0Z"
                  ></path>
                </svg>
                <TextSubtitle className="!text-black text-start">
                  {i18n.language == "uz" ? (
                    <>{formatMoney(data.price)}  mln dan boshlab</>
                  ) : (
                    <>Начиная с {formatMoney(data.price)} млн сум</>
                  )}
                </TextSubtitle>
              </div>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
};

export default SimplePackages;
