import { useTranslation } from "next-i18next";
import { motion } from 'framer-motion';

const BronHotel = () => {
  const { t } = useTranslation("common");
  const classes =
    "py-6 px-3 text-black focus:ring-2 focus:ring-secondary bg-white outline-none transition-all duration-300 capitalize";
  return (
    <div>
      <div className="flex flex-col items-center gap-4">
      <div className="grid w-full lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[0.15rem]">
        <input
          type="text"
          className={`${classes} rounded-l-[10px] sm:rounded-r-none rounded-r-[10px]`}
          placeholder={t("hero.hotel.input.city")}
        />
        <input
          type="text"
          className={`${classes} lg:rounded-r-none rounded-r-[10px] sm:rounded-l-none rounded-l-[10px]`}
          placeholder={t("hero.hotel.input.go")}
        />
        <input
          type="text"
          className={`${classes} lg:rounded-l-none rounded-l-[10px] sm:rounded-r-none rounded-r-[10px]`}
          placeholder={t("hero.hotel.input.back")}
        />
        <input
          type="text"
          className={`${classes} rounded-r-[10px] sm:rounded-l-none rounded-l-[10px]`}
          placeholder={t("hero.hotel.input.guest")}
        />
      </div>
      <motion.button whileHover={{ scale: 1.1 }} className="text-center py-2 bg-secondary px-6 uppercase rounded-md">{t('hero.btn')}</motion.button>
    </div>
    </div>
  )
}

export default BronHotel