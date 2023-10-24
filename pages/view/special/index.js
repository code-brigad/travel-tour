import { AnimatedHeader, Error, Loading } from '@/components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { mulish, unbounded } from '@/public/assets/fonts'
import { IconHome } from '@/icons';
import { motion } from 'framer-motion';
import { TextHeading, TextSubtitle } from '@/theme/Text';
import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import axios from "@/config/axios.config"
import LayoutForAll from '@/components/LayoutForAll';

const Special = () => {
    const { t, i18n } = useTranslation('common')
    const [packages, setPackages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getPackages = async () => {
        setIsLoading(true);
        setIsError(false);
        try {
            const { data } = await axios.get("travel/");
            setPackages(data);
            setIsLoading(false);
            setIsError(false);
        } catch (error) {
            setIsLoading(false);
            setIsError(true);
        }
    };

    useEffect(() => {
        getPackages();
    }, []);
    return (
        <LayoutForAll>
            <Head>
                <title>Sayohat - {t('cpecial.desc')}</title>
            </Head>
            <section className='flex items-center bg-cube bg-main text-white'>
                <div className='custom-container pt-[150px] pb-[150px] flex flex-col gap-6'>
                    <AnimatedHeader
                        className={`text-center font-black md:leading-none leading-[70px] uppercase lg:text-[80px] md:text-[70px] text-[60px] ${unbounded.className}`}
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
                                <Link href={'/special'} className='font-medium'><TextSubtitle className={'!text-white'}>Maxsus</TextSubtitle></Link>
                            </li>
                        </motion.ul>
                    </div>
                </div>
            </section>
            <section className={`custom-container py-[60px] ${mulish.className}`}>
                <div className='w-full flex items-center justify-center'>
                    {isLoading ? <Loading /> : isError ? <Error /> : packages.length == 0 ?
                        <div className='bg-main/[0.03] rounded-[10px] py-6 sm:w-[50%] w-full border'>
                            <TextHeading className={"text-center"}>{t('direction.notFound')}</TextHeading>
                            <TextSubtitle className={'!text-black'}>{t('direction.reason')}</TextSubtitle>
                            <ul className='px-3 flex flex-col justify-center items-center'>
                                <li className='text-[14px]'><TextSubtitle className={'!text-black'}>{t('direction.reason1')}</TextSubtitle></li>
                                <li className='text-[14px]'><TextSubtitle className={'!text-black'}>{t('direction.reason2')}</TextSubtitle></li>
                            </ul>
                        </div>
                        : <ul className="w-full flex flex-col gap-8">
                            {packages.filter((e) => e.type == "special")?.map((data) => {
                                return (
                                    <li key={data.id}>
                                        <div className="cursor-pointer w-full h-auto">
                                            <Link
                                                href={{
                                                    pathname: "/view/direction/[id]",
                                                    query: { id: data.id },
                                                }}
                                            >
                                                <div className='w-full'>
                                                    <Image src={data.image} alt='placeholder' width={500} height={500} className='w-full rounded-[20px] h-[200px] object-cover object-center' />
                                                </div>
                                            </Link>
                                        </div>
                                        <TextHeading className={"capitalize"}>
                                            {data.from_uz} {data.where_uz}
                                        </TextHeading>
                                        <div className="flex flex-row gap-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18px"
                                                height="18px"
                                                fill="none"
                                                stroke-width="1.5"
                                                viewBox="0 0 24 24"
                                                color="#000000"
                                                className="fill-gray-400 sm:block hidden"
                                            >
                                                <path
                                                    className="stroke-gray-400"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M10.5 4.5v4.667a.6.6 0 0 1-.282.51l-7.436 4.647a.6.6 0 0 0-.282.508v.9a.6.6 0 0 0 .746.582l6.508-1.628a.6.6 0 0 1 .746.582v2.96a.6.6 0 0 1-.205.451l-2.16 1.89c-.458.402-.097 1.151.502 1.042l3.256-.591a.6.6 0 0 1 .214 0l3.256.591c.599.11.96-.64.502-1.041l-2.16-1.89a.6.6 0 0 1-.205-.452v-2.96a.6.6 0 0 1 .745-.582l6.51 1.628a.6.6 0 0 0 .745-.582v-.9a.6.6 0 0 0-.282-.508l-7.436-4.648a.6.6 0 0 1-.282-.509V4.5a1.5 1.5 0 0 0-3 0Z"
                                                ></path>
                                            </svg>
                                            <TextSubtitle className="!text-black text-start">
                                                {i18n.language == "uz" ? (
                                                    <>{data.price}mln dan boshlab / {data.fly_date.slice(0, 10)}</>
                                                ) : (
                                                    <>Начиная с {data.price} млн сум</>
                                                )}
                                            </TextSubtitle>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    }
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

export default Special