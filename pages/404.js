import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { mulish } from '@/public/assets/fonts'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import ArrowLeft from '@/icons/ArrowLeft'
import Link from 'next/link'
import { IconSearch } from '@/icons'
import LayoutForAll from '@/components/LayoutForAll'

const Custom404 = () => {
    const { t } = useTranslation('common')
    const back = () => {
        window.history.back()
    }
    return (
        <LayoutForAll>
            <Head>
                <title>{t('custom404.pageTitle')}</title>
            </Head>
            <section className={`bg-notfound h-screen min-h-[500px] w-full flex items-center justify-center ${mulish.className}`}>
                <div className='text-center flex flex-col items-center'>
                    <div className='w-[3rem] h-[3rem] bg-white shadow-lg flex items-center justify-center rounded-lg'>
                        <IconSearch />
                    </div>
                    <h1 className='text-[40px] font-bold'>{t('custom404.title')}</h1>
                    <p className='text-black opacity-70'>404 error</p>
                    <div className='w-full flex sm:flex-row flex-col items-center justify-center gap-3 mt-4'>
                        <button
                            className="max-w-[250px] sm:w-fit w-full text-center text-black py-2 px-6 rounded-md border border-black/70 hover:bg-gray-600/10 flex justify-center flex-row items-center gap-2"
                            onClick={back}
                        >
                            <ArrowLeft />
                            {t("custom404.back")}
                        </button>
                        <Link href={'/'} className='max-w-[250px] sm:w-fit w-full'>
                            <button className='w-full py-2 px-6 text-white bg-main rounded-md'>
                                {t('custom404.main')}
                            </button>
                        </Link>
                    </div>
                </div>
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

export default Custom404