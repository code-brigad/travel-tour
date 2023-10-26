import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { mulish, unbounded } from "@/public/assets/fonts";
import { TextSubtitle } from "@/theme/Text";
import { IconLocation, IconTelegram } from "@/icons";
import Mail from "@/icons/Mail";

const Footer = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <footer className={`pt-8 border-t ${mulish.className}`}>
      <div className="flex w-full flex-col gap-6 mb-6 custom-container">
        <ul className="flex md:flex-row flex-col md:gap-0 gap-7 justify-between">
          <li>
            <ul className="flex flex-col gap-[6px]">
              <li className="mb-1 w-fit">
                <TextSubtitle
                  className={`${unbounded.className} text-start font-medium`}
                >
                  Travel House 777
                </TextSubtitle>
              </li>
              <li className="flex flex-row items-center gap-2 hover:text-secondary w-fit">
                <IconLocation fatherClass={"!fill-black"} />
                <Link href={"https://yandex.uz/maps/-/CDaVAToy"}>
                  Toshkent, Bekobod
                </Link>
              </li>
              <li className="flex flex-row items-center gap-2 hover:text-secondary w-fit">
                <IconTelegram
                  fatherClass={"fill-black"}
                  childClass={"!stroke-black"}
                />
                <Link href={"tel:+998909993023"}>+998 90 999 30 23</Link>
              </li>
              <li className="flex flex-row items-center gap-2 hover:text-secondary w-fit">
                <Mail childClass={"!stroke-black"} />
                <Link href={"mailto:yordam@tour-house.uz"}>
                  yordam@tour-house.uz
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <ul className="flex flex-col gap-[6px]">
              <li className="mb-1 w-fit">
                <TextSubtitle className={`text-start !text-black font-bold`}>
                  {t("footer.pages.title")}
                </TextSubtitle>
              </li>
              <li className="flex flex-row items-center gap-2 hover:text-secondary w-fit">
                <Link href={"/view/direction"}>{t("footer.pages.paket")}</Link>
              </li>
              <li className="flex flex-row items-center gap-2 hover:text-secondary w-fit">
                <Link href={"/view/special"}>{t("footer.pages.special")}</Link>
              </li>
              <li className="flex flex-row items-center gap-2 hover:text-secondary w-fit">
                <Link href={"/view/location"}>{t("footer.pages.location")}</Link>
              </li>
              <li className="flex flex-row items-center gap-2 hover:text-secondary w-fit">
                <Link href={"/view/about"}>{t("footer.pages.about")}</Link>
              </li>
            </ul>
          </li>
          <li>
            <ul className="flex flex-col gap-[6px]">
              <li className="mb-1 w-fit">
                <TextSubtitle className={`text-start !text-black font-bold`}>
                  {t("footer.socials.title")}
                </TextSubtitle>
              </li>
              <li className="flex flex-row items-center gap-2 hover:text-secondary w-fit">
                <Link href={""}>Telegram</Link>
              </li>
              <li className="flex flex-row items-center gap-2 hover:text-secondary w-fit">
                <Link href={""}>Instagram</Link>
              </li>
              <li className="flex flex-row items-center gap-2 hover:text-secondary w-fit">
                <Link href={""}>YouTube</Link>
              </li>
            </ul>
          </li>
          <li>
            <ul className="flex flex-col gap-[6px]">
              <li className="mb-1 w-fit">
                <TextSubtitle className={`text-start !text-black font-bold`}>
                  {t("footer.help.title")}
                </TextSubtitle>
              </li>
              <li className="flex flex-row items-center gap-2 hover:text-secondary w-fit">
                <Link href={"/view/direction"}>{t("footer.help.telegram")}</Link>
              </li>
              <li className="flex flex-row items-center gap-2 hover:text-secondary w-fit">
                <Link href={"/view/special"}>{t("footer.help.admin")}</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="text-black border-t py-4 flex items-center">
        <Link
          href={"https://code-brigade.uz/"}
          target="_blank"
          className="text-center w-full"
        >
          {i18n.language == "uz" ? (
            <>
              <span className="font-medium">“Code Brigade”</span> tomonidan
              ishlab chiqarilgan
            </>
          ) : (
            <>
              Произведено <span className="font-medium">“Code Brigade”</span>
            </>
          )}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
