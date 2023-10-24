import React from "react";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import { Error, Loading } from "@/components";
import Image from "next/image";
import axios from "@/config/axios.config";
import Link from "next/link";
import "swiper/css/pagination";

const SpecialPackages = () => {
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
  console.log(packages);

  useEffect(() => {
    getPackages();
  }, []);

  return (
    <section className="custom-container pt-8 flex flex-col gap-8">
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : packages.filter((e) => e.type == "special").length == 0 ? (
        ""
      ) : (
        <ul className="flex flex-col gap-4 w-full h-[300px]">
          <Swiper
            direction={"vertical"}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {packages
              .filter((e) => e.type == "special")
              .map((data, i) => {
                return (
                  <SwiperSlide className="w-full !h-full cursor-pointer">
                    <Link
                      href={{
                        pathname: "/view/special/[id]",
                        query: { id: data.id },
                      }}
                    >
                      <Image
                        src={"/images/big-placeholder.png"}
                        alt={data}
                        width={1000}
                        height={1000}
                        className="w-full object-cover rounded-[20px] h-full"
                      />
                    </Link>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </ul>
      )}
    </section>
  );
};

export default SpecialPackages;
