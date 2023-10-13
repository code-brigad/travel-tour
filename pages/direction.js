import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Direction = () => {
  return (
    <div>Direction</div>
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

export default Direction