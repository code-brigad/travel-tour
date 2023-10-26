import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";
import { useEffect } from "react";
import { Error, Loading } from "@/components";
import Image from "next/image";
import axios from "@/config/axios.config";
import Link from "next/link";
import { motion } from "framer-motion";
import "swiper/css/pagination";

const SpecialPackages = () => {
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

  if (isLoading) {
    return (
      <section className="max-w-[1100px] px-4 -translate-x-1/2 relative left-[50%]">
        <Loading />
      </section>
    );
  }

  if (isError) {
    return (
      <section className="max-w-[1100px] px-4 -translate-x-1/2 relative left-[50%]">
        <Error />
      </section>
    );
  }

  return (
    <section className="custom-container pt-8 flex flex-col gap-8">
      {packages.filter((e) => e.type == "special").length == 0 ? (
        ""
      ) : (
        <motion.ul
          className="flex flex-col gap-4 w-full h-[300px]"
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
                  <SwiperSlide
                    className="w-full !h-full cursor-pointer"
                    key={data.id}
                  >
                    <Link
                      href={{
                        pathname: "/view/special/[id]",
                        query: { id: data.id },
                      }}
                    >
                      <Image
                        src={data.image}
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
        </motion.ul>
      )}
    </section>
  );
};

export default SpecialPackages;
