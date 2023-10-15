import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { poppins } from "@/public/assets/fonts";

const Footer = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <footer className={`border-t py-8 ${poppins.className}`}>
      <div className="flex w-full flex-col items-center gap-6 mb-6">
        <ul className="flex sm:flex-row flex-col text-center gap-2">
          <li className="text-[14px] hover:text-main">
            <Link href={"/"}>{t("footer.paket")}</Link>
          </li>
          <li className="sm:block hidden">•</li>
          <li className="text-[14px] hover:text-main">
            <Link href={"/"}>{t("footer.special")}</Link>
          </li>
          <li className="sm:block hidden">•</li>
          <li className="text-[14px] hover:text-main">
            <Link href={"/info"}>{t("footer.help")}</Link>
          </li>
        </ul>
        <p className="text-[14px]">&copy; Sayohat {new Date().getFullYear()}</p>
      </div>
      <div className="bg-main text-white py-4 flex items-center">
        <Link href={'https://code-brigade.vercel.app/'} target="_blank" className="text-center w-full">
          {i18n.language == "uz" ? (
            <><span className="font-medium">“Code Brigade”</span> tomonidan ishlab chiqarilgan</>
          ) : (
            <>Произведено <span className="font-medium">“Code Brigade”</span></>
          )}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
