import { AnimatedHeader } from '@/components'
import { BronPaket } from '@/sections'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { motion } from 'framer-motion'
import { mulish, unbounded } from '@/public/assets/fonts'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import { TextHeading, TextSubtitle } from '@/theme/Text'
import LayoutForAll from '@/components/LayoutForAll'

const Direction = () => {
  const { t } = useTranslation('common')
  return (
    <LayoutForAll>
      <Head>
        <title>{t('direction.pageTitle')}</title>
      </Head>
      <section className="bg-cube bg-main text-white min-h-[400px] flex items-center justify-center">
        <div className="pt-[150px] pb-[150px] w-full custom-container flex flex-col gap-6">
          {/* <UserSearchType searchType={searchType} setSearchType={setSearchType} /> */}
          {/* {searchType == "paket" ? (
          <>
            <AnimatedHeader
              className={`text-center font-black md:leading-none leading-[70px] uppercase lg:text-[80px] md:text-[70px] text-[60px] ${unbounded.className}`}
              text={t("hero.paket.title")}
            />
            <p className="text-center font-regular">{t("hero.paket.desc")}</p>
            <BronPaket />
          </>
        ) : (
          <>
            <AnimatedHeader
              className={`text-center font-black md:leading-none leading-[70px] uppercase lg:text-[80px] md:text-[70px] text-[60px] ${unbounded.className}`}
              text={"Mehmonxona"}
            />
            <p className="text-center font-regular">{t("hero.paket.desc")}</p>
            <BronHotel />
          </>
        )} */}
          <AnimatedHeader
            className={`text-center font-black md:leading-none leading-[70px] uppercase lg:text-[80px] md:text-[70px] text-[60px] ${unbounded.className}`}
            text={t("direction.title")}
          />
          <BronPaket />
        </div>
      </section>
      <section className={`custom-container py-[60px] ${mulish.className}`}>
        <div className='w-full flex items-center justify-center'>
          <div className='bg-main/[0.03] rounded-[10px] py-6 sm:w-[50%] w-full border'>
            <TextHeading className={"text-center"}>{t('direction.notFound')}</TextHeading>
            <TextSubtitle className={'!text-black'}>{t('direction.reason')}</TextSubtitle>
            <ul className='px-3 flex flex-col justify-center items-center'>
              <li className='text-[14px]'><TextSubtitle className={'!text-black'}>{t('direction.reason1')}</TextSubtitle></li>
              <li className='text-[14px]'><TextSubtitle className={'!text-black'}>{t('direction.reason2')}</TextSubtitle></li>
            </ul>
          </div>
        </div>
      </section>
    </LayoutForAll>
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