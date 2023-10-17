import { AnimatedHeader } from '@/components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { young_serif } from '@/public/assets/fonts'
import { IconHome } from '@/icons';
import { Image } from "antd";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

const packages = [
    {
        photo: "/images/placeholder.png",
        city: "BAA",
        price: "1.6",
    },
    {
        photo: "/images/placeholder.png",
        city: "BAA",
        price: "1.6",
    },
    {
        photo: "/images/placeholder.png",
        city: "BAA",
        price: "1.6",
    },
    {
        photo: "/images/placeholder.png",
        city: "BAA",
        price: "1.6",
    },
    {
        photo: "/images/placeholder.png",
        city: "BAA",
        price: "1.6",
    },
    {
        photo: "/images/placeholder.png",
        city: "BAA",
        price: "1.6",
    },
    {
        photo: "/images/placeholder.png",
        city: "BAA",
        price: "1.6",
    },
    {
        photo: "/images/placeholder.png",
        city: "BAA",
        price: "1.6",
    },
];

const Special = () => {
    const { t, i18n } = useTranslation('common')
    return (
        <>
            <Head>
                <title>Sayohat - {t('cpecial.desc')}</title>
            </Head>
            <section className='flex items-center pt-[100px] min-h-[400px] pb-8 bg-cube bg-main text-white'>
                <div className='custom-container flex flex-col gap-5'>
                    <AnimatedHeader
                        className={`text-center font-black md:leading-none leading-[70px] uppercase lg:text-[80px] md:text-[70px] text-[60px] ${young_serif.className}`}
                        text={t("cpecial.title")}
                    />
                    <div className='w-full flex justify-center'>
                        <motion.ul
                            className='flex flex-row items-center gap-5'
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                stiffness: 500,
                                duration: 0.2,
                            }}
                        >
                            <li className="border border-white/20 p-2 hover:bg-white/10 rounded-[5px] w-fit cursor-pointer before:content-['/'] relative before:absolute before:right-[-15px] before:top-[50%] before:translate-y-[-50%]">
                                <Link href={'/'}><IconHome /></Link>
                            </li>
                            <li className="border border-white/20 py-[6px] px-4 hover:bg-white/10 rounded-[5px] w-fit cursor-pointer">
                                <Link href={'/special'} className='font-medium'>Maxsus</Link>
                            </li>
                        </motion.ul>
                    </div>
                </div>
            </section>
            <section className='custom-container py-[60px]'>
                <ul className="grid md:grid-cols-4 grid-cols-2 gap-3">
                    {packages.map((pack, i) => {
                        return (
                            <li key={i}>
                                <Image src={pack.photo} alt={pack.city} />
                                <p className="text-[26px] font-bold">{pack.city}</p>
                                <div className="flex flex-row gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18px"
                                        height="18px"
                                        fill="none"
                                        stroke-width="1.5"
                                        viewBox="0 0 24 24"
                                        color="#000000"
                                        className="fill-gray-400"
                                    >
                                        <path
                                            className="stroke-gray-400"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M10.5 4.5v4.667a.6.6 0 0 1-.282.51l-7.436 4.647a.6.6 0 0 0-.282.508v.9a.6.6 0 0 0 .746.582l6.508-1.628a.6.6 0 0 1 .746.582v2.96a.6.6 0 0 1-.205.451l-2.16 1.89c-.458.402-.097 1.151.502 1.042l3.256-.591a.6.6 0 0 1 .214 0l3.256.591c.599.11.96-.64.502-1.041l-2.16-1.89a.6.6 0 0 1-.205-.452v-2.96a.6.6 0 0 1 .745-.582l6.51 1.628a.6.6 0 0 0 .745-.582v-.9a.6.6 0 0 0-.282-.508l-7.436-4.648a.6.6 0 0 1-.282-.509V4.5a1.5 1.5 0 0 0-3 0Z"
                                        ></path>
                                    </svg>
                                    <p className="sm:text-[16px] text-[14px]">
                                        {i18n.language == "uz" ? (
                                            <>{pack.price}mln dan boshlab</>
                                        ) : (
                                            <>начиная с {pack.price}</>
                                        )}
                                    </p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
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

export default Special