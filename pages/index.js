import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { mulish } from '@/public/assets/fonts'
import { Hero, SimplePackages, SpecialPackages } from '@/sections'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'

export default function Home() {
  const { t } = useTranslation('common')
  return (
    <>
      <Head>
        <title>{t('hero.pageTitle')}</title>
      </Head>
      <section className={mulish.className}>
        <Hero />
        <SpecialPackages />
        <SimplePackages />
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
