import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { mulish } from '@/public/assets/fonts'
import { Gallery, Hero, SimplePackages, SpecialPackages } from '@/sections'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import LayoutForAll from '@/components/LayoutForAll'

export default function Home() {
  const { t } = useTranslation('common')
  return (
    <LayoutForAll>
      <Head>
        <title>{t('hero.pageTitle')}</title>
      </Head>
      <section className={mulish.className}>
        <Hero />
        <SpecialPackages />
        <SimplePackages />
        <Gallery />
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
