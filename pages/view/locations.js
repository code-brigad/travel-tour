import { AnimatedHeader } from '@/components'
import { mulish, unbounded } from '@/public/assets/fonts';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';
import { IconHome } from '@/icons';
import { YMaps, Map, ZoomControl, Placemark, FullscreenControl } from '@pbe/react-yandex-maps';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { TextHeading, TextSubtitle } from '@/theme/Text';

const Locations = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>Sayohat - {t('locations.pageTitle')}</title>
      </Head>
      <section className='bg-cube bg-main text-white flex justify-center items-center'>
        <div className='custom-container pb-[150px] pt-[150px] flex flex-col gap-6'>
          <AnimatedHeader
            className={`text-center font-black md:leading-none leading-[70px] uppercase lg:text-[80px] md:text-[70px] text-[60px] ${unbounded.className}`}
            text={t('locations.title')}
          />
          <div className='w-full flex justify-center'>
            <motion.ul
              className='flex flex-row items-center gap-5'
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                stiffness: 500,
                duration: 0.2,
              }}
            >
              <li className="border border-white/20 p-2 hover:bg-white/10 rounded-[5px] w-fit cursor-pointer before:content-['/'] relative before:absolute before:right-[-15px] before:top-[50%] before:translate-y-[-50%]">
                <Link href={'/'}><IconHome /></Link>
              </li>
              <li className="border border-white/20 py-[6px] px-4 hover:bg-white/10 rounded-[5px] w-fit cursor-pointer">
                <TextSubtitle className={'!text-white'}><Link href={'/view/locations'} className='font-medium'>{t('locations.title')}</Link></TextSubtitle>
              </li>
            </motion.ul>
          </div>
        </div>
      </section>
      <section className={`py-[60px] custom-container flex md:flex-row flex-col gap-3 md:h-[400px] h-[800px] ${mulish.className}`}>
        <div className='flex flex-col gap-1 w-full md:h-full h-[200px] bg-main/[0.03] border rounded-[10px]'>
          <TextHeading className={'p-2'}>{t('locations.location')}</TextHeading>
          <div className='w-full border-b'></div>
          <div className='p-2 flex flex-col gap-2'>
            <TextSubtitle className='text-start !text-black'><span className='text-main'>{t('locations.adress')}</span>: {t('locations.location')}</TextSubtitle>
            <TextSubtitle className={'text-start !text-black'}><span className='text-main'>{t('locations.phone')}</span>: <Link href="tel: +998900000000">+998 90 000 00 00</Link></TextSubtitle>
            <TextSubtitle className={'text-start !text-black'}><span className='text-main'>{t('about.info6')}:</span> info@site.uz</TextSubtitle>
          </div>
        </div>
        <YMaps>
          <div className='rounded-[10px] h-full overflow-hidden border w-full'>
            <Map className='!w-full h-full' defaultState={{ center: [40.217701, 69.265799], zoom: 12, controls: [] }}>
              <ZoomControl options={{ float: 'right' }} />
              <FullscreenControl />
              <Placemark geometry={[40.217701, 69.265799]} />
            </Map>
          </div>
        </YMaps>
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

export default Locations