import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { AnimatedHeader } from '@/components'
import { IconHome, IconInstagram, IconTelegram, IconYoutube } from '@/icons'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { mulish, unbounded } from '@/public/assets/fonts'
import { motion } from 'framer-motion'
import { TextHeading, TextSubtitle } from '@/theme/Text'

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
  const { t } = useTranslation('common')
  return (
    <>
      <Head>
        <title>Sayohat - {t('about.pageTitle')}</title>
      </Head>
      <section className='bg-cube bg-main text-white flex justify-center items-center'>
        <div className='custom-container pb-[150px] pt-[150px] flex flex-col gap-6'>
          <AnimatedHeader
            className={`text-center font-black md:leading-none leading-[70px] uppercase lg:text-[80px] md:text-[70px] text-[60px] ${unbounded.className}`}
            text={t('about.title')}
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
                <Link href={'/view/about'} className='font-medium'>
                  <TextSubtitle className={'!text-white'}>{t('about.title')}</TextSubtitle>
                </Link>
              </li>
            </motion.ul>
          </div>
        </div>
      </section>
      <section className={`custom-container py-[60px] flex flex-col gap-4 ${mulish.className}`}>
        <div className='bg-main/[0.03] p-4 border rounded-[10px] flex flex-col gap-2'>
          <TextSubtitle className={'!text-black text-start'}>{t('about.info1')}</TextSubtitle>
          <TextSubtitle className={'!text-black text-start'}>{t('about.info2')}</TextSubtitle>
          <ul>
            <li className='font-medium'>
              <TextSubtitle className={'!text-black text-start'}>{t('about.info3')}:</TextSubtitle>
            </li>
            <li><TextSubtitle className={'!text-black text-start'}>{t('about.info4')}</TextSubtitle></li>
            <li className='hover:text-main w-fit'>
              <TextSubtitle className='text-main text-start inline'>{t('about.info5')}:</TextSubtitle>{" "}
              <Link href="tel: +998900000000">
                <TextSubtitle className={'inline !text-black hover:!text-main'}>+998 90 000 00 00</TextSubtitle>
              </Link>
            </li>
            <li className='w-fit'>
              <TextSubtitle className='!text-main inline'>{t('about.info6')}:</TextSubtitle>{" "}
              <Link href=""><TextSubtitle className={'!text-black inline'}>info@site.uz</TextSubtitle></Link>
            </li>
            <li className=' w-fit'>
              <TextSubtitle className='!text-main text-start inline'>
                {t('locations.adress')}:
              </TextSubtitle>{" "}
              <Link href="https://yandex.uz/maps/-/CDaVAToy" target='_blank'>
                <TextSubtitle className={'!text-black text-start inline hover:!text-main'}>
                  Toshkent Viloyati, Bekobod Shahar
                </TextSubtitle>
              </Link>
            </li>
          </ul>
        </div>
        <div className='p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-[10px] flex flex-col gap-2'>
          <TextHeading className='text-[20px] uppercase font-semibold'>{t('about.socials.title')}</TextHeading>
          <TextSubtitle className={'!text-white text-start'}>{t('about.socials.desc')}</TextSubtitle>
          <ul className='flex flex-row items-center gap-1'>
            {socials.map((social) => {
              return (
                <li key={social.id} className='border border-white/20 hover:border-white/50 cursor-pointer p-3 bg-white/10 rounded-[5px]'>
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