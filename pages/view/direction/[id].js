import { Direction } from '@/sections'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Open = () => {
  const route = useRouter()

  return (
    <>
      <Head>
        <title>Test</title>
      </Head>
      <Direction route={route} />
    </>
  )
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common'
      ])),
    },
  }
}

export default Open