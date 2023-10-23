import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Head from 'next/head';
import { useRouter } from 'next/router';

const Open = () => {
  const { t, i18n } = useTranslation('common')
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Sayohat - {t('cpecial.desc')}</title>
      </Head>
      <section className='flex items-center'>
        <div className='custom-container pt-[150px] pb-[150px] flex flex-col gap-6'>

        </div>
      </section>
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