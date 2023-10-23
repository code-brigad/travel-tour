import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router';
import Head from 'next/head';
import DirDetails from '@/sections/DirDetails';

const Open = () => {
  const router = useRouter()
  const { id } = router.query
  console.log(router);

  return (
    <>
      <Head>
        <title>Details</title>
      </Head>
      <DirDetails id={id}/>
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