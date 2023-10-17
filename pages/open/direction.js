import { AnimatedHeader } from '@/components'
import { BronPaket } from '@/sections'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { motion } from 'framer-motion'
import { poppins, young_serif } from '@/public/assets/fonts'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import { IconCloud } from '@/icons'

const Direction = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <Head>
        <title>{t('direction.pageTitle')}</title>
      </Head>
      <section className="bg-cube bg-main text-white min-h-[400px] flex items-center justify-center">
        <div className="pt-[100px] pb-[100px] custom-container flex flex-col gap-4">
          {/* <UserSearchType searchType={searchType} setSearchType={setSearchType} /> */}
          {/* {searchType == "paket" ? (
          <>
            <AnimatedHeader
              className={`text-center font-black md:leading-none leading-[70px] uppercase lg:text-[80px] md:text-[70px] text-[60px] ${young_serif.className}`}
              text={t("hero.paket.title")}
            />
            <p className="text-center font-regular">{t("hero.paket.desc")}</p>
            <BronPaket />
          </>
        ) : (
          <>
            <AnimatedHeader
              className={`text-center font-black md:leading-none leading-[70px] uppercase lg:text-[80px] md:text-[70px] text-[60px] ${young_serif.className}`}
              text={"Mehmonxona"}
            />
            <p className="text-center font-regular">{t("hero.paket.desc")}</p>
            <BronHotel />
          </>
        )} */}
          <AnimatedHeader
            className={`text-center font-black md:leading-none leading-[70px] uppercase lg:text-[80px] md:text-[70px] text-[60px] ${young_serif.className}`}
            text={t("direction.title")}
          />
          <BronPaket />
        </div>
      </section>
      <section className={`custom-container py-[60px] ${poppins.className}`}>
        <div className='w-full flex items-center justify-center'>
          <div className='bg-main/[0.03] rounded-[10px] py-6 sm:w-[50%] w-full border'>
            <h1 className='sm:px-0 px-1  font-semibold text-[20px] uppercase text-center mb-2'>{t('direction.notFound')}</h1>
            <p className='text-center mb-1'>{t('direction.reason')}</p>
            <ul className='px-3 flex flex-col justify-center items-center'>
              <li className='text-[14px]'>{t('direction.reason1')}</li>
              <li className='text-[14px]'>{t('direction.reason2')}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common'
      ])),
    },
  }
}

export default Direction