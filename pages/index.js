import { Inter } from 'next/font/google'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className={inter.className}></section>
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
