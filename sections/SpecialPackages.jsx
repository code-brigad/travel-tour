import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { TextSubtitle, TextTitle } from "@/theme/Text";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";

const packages = [
  {
    photo: "/images/big-placeholder.png",
    city: "BAA",
    price: "1.6",
  },
  {
    photo: "/images/big-placeholder.png",
    city: "BAA",
    price: "1.6",
  },
  {
    photo: "/images/big-placeholder.png",
    city: "BAA",
    price: "1.6",
  },
  {
    photo: "/images/big-placeholder.png",
    city: "BAA",
    price: "1.6",
  },
  {
    photo: "/images/big-placeholder.png",
    city: "BAA",
    price: "1.6",
  },
  {
    photo: "/images/big-placeholder.png",
    city: "BAA",
    price: "1.6",
  },
  {
    photo: "/images/big-placeholder.png",
    city: "BAA",
    price: "1.6",
  },
  {
    photo: "/images/big-placeholder.png",
    city: "BAA",
    price: "1.6",
  },
  {
    photo: "/images/big-placeholder.png",
    city: "BAA",
    price: "1.6",
  },
  {
    photo: "/images/big-placeholder.png",
    city: "BAA",
    price: "1.6",
  },
  {
    photo: "/images/big-placeholder.png",
    city: "BAA",
    price: "1.6",
  },
  {
    photo: "/images/big-placeholder.png",
    city: "BAA",
    price: "1.6",
  },
  {
    photo: "/images/big-placeholder.png",
    city: "BAA",
    price: "1.6",
  },
];

const SpecialPackages = () => {
  const { t, i18n } = useTranslation("common");
  const router = useRouter()
  return (
    <section className="custom-container pt-8 flex flex-col gap-8">
      {/* <div>
        <TextTitle>{t("cpecial.title")}</TextTitle>
        <TextSubtitle>{t("cpecial.desc")}</TextSubtitle>
      </div> */}
      <ul className="flex flex-col gap-4 w-full h-fit">
        <Swiper
          direction={'vertical'}
          spaceBetween={30}
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
          {packages.map((pack, i) => {
            return (
              <SwiperSlide className="w-full h-fit cursor-pointer">
                <Image
                  src={pack.photo}
                  alt={pack.city}
                  width={1000}
                  height={1000}
                  className="w-full h-fit rounded-[20px]"
                  onClick={() => router.push({
                    pathname: '/view/special/[id]',
                    query: { id: "0d25be44-ab87-4585-a602-e071edee2122" }
                  })}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ul>
    </section>
  );
};

export default SpecialPackages;
