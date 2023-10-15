import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { poppins } from '@/public/assets/fonts'
import { Hero, SpecialPackages } from '@/sections'

export default function Home() {
  return (
    <section className={poppins.className}>
      <Hero />
      <SpecialPackages />
    </section>
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
