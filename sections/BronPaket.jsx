import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { DatePicker } from "antd";
import getCountriesApi from "@/layouts/getCountriesApi";

const BronPaket = () => {
  const { t } = useTranslation("common");
  const [where, setWhere] = useState({
    value: "",
    selected: "",
    open: false,
  });

  const [where2, setWhere2] = useState({
    value: "",
    selected: "",
    open: false,
  });

  var [passenger, setPassenger] = useState(1);

  const whereData = getCountriesApi(where.value);
  const whereData2 = getCountriesApi(where2.value);
  const handleGetGoDate = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleGetBackDate = (date, dateString) => {
    console.log(date, dateString);
  };
  const classes =
    "py-6 px-3 text-black focus:ring-2 focus:ring-secondary bg-white outline-none transition-all duration-300 capitalize placeholder:opacity-80";

  useEffect(() => {
    if (passenger < 2) {
      setPassenger(1);
    }
    if (passenger >= 20) {
      setPassenger(20);
    }
  }, [passenger]);
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="flex flex-col items-center gap-4"
    >
      <div className="w-full flex md:flex-row flex-col justify-between gap-[0.15rem]">
        <div className="w-full input relative">
          <input
            type="text"
            className={`${classes} w-full h-full rounded-l-[10px] md:rounded-r-none rounded-r-[10px]`}
            placeholder={t("hero.paket.input.where")}
            value={where.value}
            onChange={(e) =>
              setWhere({
                value: e.target.value,
                selected: where.selected,
                open: where.open,
              })
            }
          />
          {where.value.length !== 0 && (
            <>
              <svg
                onClick={() =>
                  setWhere({ value: "", selected: "", open: false })
                }
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
          <AnimatePresence>
            {whereData.countries.length > 0 &&
            where.selected !== where.value ? (
              <>
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.1 }}
                  className="absolute top-[76px] left-0 bg-white sm:w-[300px] w-full rounded-[8px] text-black flex flex-col shadow-lg z-30"
                >
                  {whereData.countries.map((country) => {
                    return (
                      <motion.li
                        key={country.id}
                        className="p-3 flex flex-row last:border-b-[0px] items-center gap-2 truncate border-b cursor-pointer hover:bg-main/10"
                        onClick={() =>
                          setWhere({
                            value: country.name,
                            selected: country.name,
                            open: false,
                          })
                        }
                      >
                        <p className="font-medium text-[14px]">
                          {country.name},
                        </p>
                        <p className="text-[14px] opacity-50">
                          {country.country_name}
                        </p>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </>
            ) : (
              ""
            )}
          </AnimatePresence>
        </div>
        <div className="w-full input2 relative">
          <input
            type="text"
            className={`${classes} w-full h-full md:rounded-none rounded-[10px]`}
            placeholder={t("hero.paket.input.where2")}
            value={where2.value}
            onChange={(e) =>
              setWhere2({
                value: e.target.value,
                selected: where2.selected,
                open: where2.open,
              })
            }
          />
          {where2.value.length !== 0 && (
            <>
              <svg
                onClick={() =>
                  setWhere2({ value: "", selected: "", open: false })
                }
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
          <AnimatePresence>
            {whereData2.countries.length > 0 &&
            where2.selected !== where2.value ? (
              <>
                <motion.ul className="absolute top-[76px] left-0 bg-white sm:w-[300px] w-full rounded-[8px] text-black flex flex-col shadow-lg z-30">
                  {whereData2.countries.map((country) => {
                    return (
                      <li
                        key={country.id}
                        className="p-3 flex flex-row last:border-b-[0px] items-center gap-2 truncate border-b cursor-pointer hover:bg-main/10"
                        onClick={() =>
                          setWhere2({
                            value: country.name,
                            selected: country.name,
                            open: false,
                          })
                        }
                      >
                        <p className="font-medium text-[14px]">
                          {country.name},
                        </p>
                        <p className="text-[14px] opacity-50">
                          {country.country_name}
                        </p>
                      </li>
                    );
                  })}
                </motion.ul>
              </>
            ) : (
              ""
            )}
          </AnimatePresence>
        </div>
        <div className="w-full">
          <DatePicker
            className="w-full"
            onChange={handleGetGoDate}
            placeholder={t("hero.paket.input.go")}
          />
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="text-center py-2 bg-secondary px-6 uppercase rounded-md"
      >
        {t("hero.btn")}
      </motion.button>
    </motion.div>
  );
};

export default BronPaket;
