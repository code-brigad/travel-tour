import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { poppins } from '@/public/assets/fonts'

export default function Home() {
  return (
    <section className={poppins.className}>
      <h1>text</h1>
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
