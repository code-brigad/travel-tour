import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { DatePicker } from "antd";
import axios from "@/config/axios.config";
import { IconLoading } from "@/icons";
import { useRouter } from "next/router";

const BronPaket = () => {
  const route = useRouter();
  const { t } = useTranslation("common");
  const [from, setFrom] = useState("");
  const [fromError, setFromError] = useState(false);
  const [where, setWhere] = useState("");
  const [whereError, setWhereError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const changedFrom = from[0]?.toUpperCase() + from.slice(1);
  const changedWhere = where[0]?.toUpperCase() + where.slice(1);

  const handleSubmit = async () => {
    if (where.length <= 3 && from.length <= 3) {
      setFromError(true);
      setWhereError(true);
      return;
    }

    if (where.length <= 3) {
      setWhere(true);
      return;
    }

    if (from.length <= 3) {
      setFromError(true);
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.get(
        `/travel/search/${changedFrom}-${changedWhere}`
      );
      if (response.status == 200) {
        route.push({
          pathname: "/view/search/",
          query: { from: changedFrom, where: changedWhere },
        });
      }
      setIsLoading(false);
      setFrom("")
      setWhere("")
      setFromError(false)
      setWhereError(false)
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleGetGoDate = (date, dateString) => {
    console.log(date, dateString);
  };

  const classes =
    "py-6 px-3 text-black focus:ring-2 focus:ring-secondary bg-white outline-none transition-all duration-300 capitalize placeholder:opacity-80";

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="flex flex-col items-center gap-4"
    >
      <form className="w-full">
        <div className="w-full flex md:flex-row flex-col justify-between gap-[0.15rem] shadow-lg">
          <div className="w-full input relative">
            <input
              type="text"
              name="whereFrom"
              className={`${classes} ${
                fromError == true && "ring-2 ring-red-600"
              } w-full h-full rounded-l-[10px] md:rounded-r-none rounded-r-[10px]`}
              placeholder={t("hero.paket.input.where")}
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
            {from.length !== 0 && (
              <>
                <svg
                  onClick={() => setWhere("")}
                  className="clear cursor-pointer inline z-40 absolute top-[50%] right-[14px] fill-gray-400 translate-y-[-50%]"
                  fill-rule="evenodd"
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="close-circle"
                  width="1em"
                  height="1em"
                >
                  <path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"></path>
                </svg>
              </>
            )}
          </div>
          <div className="w-full input2 relative">
            <input
              type="text"
              className={`${classes} ${
                whereError == true && "ring-2 ring-red-600"
              } w-full h-full md:rounded-none rounded-[10px]`}
              placeholder={t("hero.paket.input.where2")}
              value={where}
              onChange={(e) => setWhere(e.target.value)}
            />
            {where.length !== 0 && (
              <>
                <svg
                  onClick={() => setWhere("")}
                  className="clear2 cursor-pointer inline z-40 absolute top-[50%] right-[14px] fill-gray-400 translate-y-[-50%]"
                  fill-rule="evenodd"
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="close-circle"
                  width="1em"
                  height="1em"
                >
                  <path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"></path>
                </svg>
              </>
            )}
          </div>
          <div className="w-full">
            <DatePicker
              className="w-full"
              onChange={handleGetGoDate}
              placeholder={t("hero.paket.input.go")}
            />
          </div>
        </div>
      </form>
      <motion.button
        onClick={handleSubmit}
        whileHover={{ scale: 1.1 }}
        className="text-center w-[100px] h-[40px] bg-secondary px-6 uppercase rounded-md flex items-center justify-center"
      >
        {isLoading ? (
          <IconLoading fatherClass={"!-ml-0 !mr-0"} />
        ) : (
          <>{t("hero.btn")}</>
        )}
      </motion.button>
    </motion.div>
  );
};

export default BronPaket;
