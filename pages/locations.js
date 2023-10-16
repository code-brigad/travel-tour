import { AnimatedHeader } from '@/components'
import { poppins, young_serif } from '@/public/assets/fonts';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';
import { IconHome } from '@/icons';
import Link from 'next/link';
import { YMaps, Map, ZoomControl, Placemark, FullscreenControl } from '@pbe/react-yandex-maps';

const Locations = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <section className='pt-[100px] min-h-[400px] pb-8 bg-cube bg-main text-white flex justify-center items-center'>
        <div className='custom-container'>
          <AnimatedHeader
            className={`text-center font-black md:leading-none leading-[70px] uppercase lg:text-[80px] md:text-[70px] text-[60px] ${young_serif.className}`}
            text={t('locations.title')}
          />
          <div className='w-full flex justify-center'>
            <ul className='flex flex-row items-center gap-5'>
              <li className="border border-white/20 p-2 hover:bg-white/10 rounded-[5px] w-fit cursor-pointer before:content-['/'] relative before:absolute before:right-[-15px] before:top-[50%] before:translate-y-[-50%]">
                <Link href={'/'}><IconHome /></Link>
              </li>
              <li className="border border-white/20 py-[6px] px-4 hover:bg-white/10 rounded-[5px] w-fit cursor-pointer">
                <Link href={'/locations'} className='font-medium'>{t('locations.title')}</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={`py-[60px] custom-container flex md:flex-row flex-col gap-3 md:h-[400px] h-[800px] ${poppins.className}`}>
        <div className='flex flex-col gap-1 w-full md:h-full h-[200px] bg-main/[0.03] border rounded-[10px]'>
          <h1 className='uppercase font-semibold text-[20px] p-2'>{t('locations.location')}</h1>
          <div className='w-full border-b'></div>
          <div className='p-2 flex flex-col gap-2'>
            <p className=''><span className='text-main'>{t('locations.adress')}</span>: {t('locations.location')}</p>
            <p><span className='text-main'>{t('locations.phone')}</span>: <a href="tel: +998900000000">+998 90 000 00 00</a></p>
            <p><span className='text-main'>{t('about.info6')}:</span> info@site.uz</p>
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