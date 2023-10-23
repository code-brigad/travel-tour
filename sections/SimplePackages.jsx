import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { TextHeading, TextSubtitle, TextTitle } from "@/theme/Text";
import { useRouter } from "next/navigation";
import { Error, Loading, NoData } from "@/components";
import Image from "next/image";
import axios from "@/config/axios.config";
import Link from "next/link";

const SimplePackages = () => {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
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

  return (
    <section className="custom-container py-8 flex flex-col gap-8">
      <div>
        <TextTitle>{t("simple.title")}</TextTitle>
        <TextSubtitle>{t("simple.desc")}</TextSubtitle>
      </div>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : packages.length == 0 ? (
        <NoData />
      ) : (
        <ul className="grid md:grid-cols-4 grid-cols-2 gap-3">
          {packages?.map((data) => {
            return (
              <li key={data.id}>
                <Link
                  href={{
                    pathname: "/view/direction/[id]",
                    query: {
                      id: 1,
                    },
                  }}
                >
                  <div className="cursor-pointer w-full h-auto">
                    <Image
                      src={"/images/placeholder.png"}
                      alt={data.createdAt}
                      width={200}
                      height={200}
                      className="w-full h-full rounded-[20px]"
                    />
                  </div>
                </Link>
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
                    className="fill-gray-400 sm:block hidden"
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
                      <>{data.price}mln dan boshlab</>
                    ) : (
                      <>Начиная с {data.price} млн сум</>
                    )}
                  </TextSubtitle>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default SimplePackages;
