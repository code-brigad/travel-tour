import { AnimatedHeader } from '@/components'
import { IconHome, IconInstagram, IconTelegram, IconYoutube } from '@/icons'
import Link from 'next/link'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { poppins, young_serif } from '@/public/assets/fonts'
import Head from 'next/head'

const socials = [
  {
    id: 1,
    link: '/',
    icon: IconTelegram
  },
  {
    id: 2,
    link: '/',
    icon: IconInstagram
  },
  {
    id: 3,
    link: '/',
    icon: IconYoutube
  },
]

const About = () => {
  const { t, i18n } = useTranslation('common')
  return (
    <>
      <Head>
        <title>Sayohat - {t('about.pageTitle')}</title>
      </Head>
      <section className='pt-[100px] min-h-[400px] pb-8 bg-cube bg-main text-white flex justify-center items-center'>
        <div className='custom-container'>
          <AnimatedHeader
            className={`text-center font-black md:leading-none leading-[70px] uppercase lg:text-[80px] md:text-[70px] text-[60px] ${young_serif.className}`}
            text={t('about.title')}
          />
          <div className='w-full flex justify-center'>
            <ul className='flex flex-row items-center gap-5'>
              <li className="border border-white/20 p-2 hover:bg-white/10 rounded-[5px] w-fit cursor-pointer before:content-['/'] relative before:absolute before:right-[-15px] before:top-[50%] before:translate-y-[-50%]">
                <Link href={'/'}><IconHome /></Link>
              </li>
              <li className="border border-white/20 py-[6px] px-4 hover:bg-white/10 rounded-[5px] w-fit cursor-pointer">
                <Link href={'/locations'} className='font-medium'>{t('about.title')}</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={`custom-container py-[60px] flex flex-col gap-4 ${poppins.className}`}>
        <div className='bg-main/[0.03] p-4 border rounded-[10px] flex flex-col gap-2'>
          <p>{t('about.info1')}</p>
          <p>{t('about.info2')}</p>
          <ul>
            <li className='font-medium'>{t('about.info3')}:</li>
            <li>{t('about.info4')}</li>
            <li className='hover:text-main w-fit'>
              <span className='text-main'>{t('about.info5')}:</span> <a href="tel: +998900000000">+998 90 000 00 00</a></li>
            <li className='hover:text-main w-fit'><span className='text-main'>{t('about.info6')}:</span> info@site.uz</li>
            <li className='hover:text-main w-fit'><span className='text-main'>{t('locations.adress')}:</span> <a href="https://yandex.uz/maps/-/CDaVAToy" target='_blank'>Toshkent Viloyati, Bekobod Shahar</a></li>
          </ul>
        </div>
        <div className='p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-[10px] flex flex-col gap-2'>
          <h1 className='text-[20px] uppercase font-semibold'>{t('about.socials.title')}</h1>
          <p>{t('about.socials.desc')}</p>
          <ul className='flex flex-row items-center gap-1'>
            {socials.map((social) => {
              return (
                <li className='border border-white/20 hover:border-white/50 cursor-pointer p-3 bg-white/10 rounded-[5px]'>
                  <div>
                    <social.icon />
                  </div>
                </li>
              )
            })}
          </ul>
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

export default About