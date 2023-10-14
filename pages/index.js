import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { poppins } from '@/public/assets/fonts'
import { Hero } from '@/sections'

export default function Home() {
  return (
    <section className={poppins.className}>
      <Hero />
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
