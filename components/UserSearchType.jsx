import React from "react";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

const types = [
  {
    id: 1,
    name: "hero.tab.paket",
    value: "paket",
  },
  {
    id: 2,
    name: "hero.tab.hotel",
    value: "hotel",
  },
];

const UserSearchType = ({ searchType, setSearchType }) => {
  const { t } = useTranslation("common");
  return (
    <div className="w-full flex justify-center">
      <ul className="flex flex-row gap-2 bg-white/10 p-1 rounded-[10px] relative">
        <li
          className="type absolute w-full h-full top-0 left-0 flex justify-end p-1"
          data-type-changed={searchType}
        >
          <motion.div
            transition={{ type: "spring", stiffness: 700, damping: 70 }}
            layout
            data-type-changed={searchType}
            className="w-[100px] h-full bg-white rounded-md z-20"
          ></motion.div>
        </li>
        {types.map((type) => {
          return (
            <li
              key={type.id}
              className={`py-1 px-2 uppercase z-20 cursor-pointer ${
                searchType == type.value ? "font-bold text-main" : "text-white"
              }`}
              onClick={() => setSearchType(type.value)}
            >
              {t(type.name)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserSearchType;
