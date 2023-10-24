import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { mulish } from "@/public/assets/fonts";
import { TextSubtitle } from "@/theme/Text";

const Footer = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <footer className={`border-t pt-8 ${mulish.className}`}>
      <div className="flex w-full flex-col items-center gap-6 mb-6">
        <ul className="flex sm:flex-row flex-col text-center gap-2">
          <li className="text-[14px] hover:text-main">
            <TextSubtitle className={"!text-black hover:!text-main"}>
              <Link href={"/view/direction"}>{t("footer.paket")}</Link>
            </TextSubtitle>
          </li>
          <li className="sm:block hidden">&bull;</li>
          <li className="text-[14px] hover:text-main">
            <TextSubtitle className={"!text-black hover:!text-main"}>
              <Link href={"/view/special"}>{t("footer.special")}</Link>
            </TextSubtitle>
          </li>
          <li className="sm:block hidden">&bull;</li>
          <li className="text-[14px] hover:text-main">
            <Link href={"/view/about"}>
              <TextSubtitle className={"!text-black hover:!text-main"}>
                {t("footer.help")}
              </TextSubtitle>
            </Link>
          </li>
        </ul>
        <TextSubtitle className={"!text-black"}>
          &laquo; Travel House 777 &raquo;
        </TextSubtitle>
      </div>
      <div className="bg-main text-white py-4 flex items-center">
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
