import { AnimatedHeader, Error, Loading } from '@/components'
import { BronPaket } from '@/sections'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { mulish, unbounded } from '@/public/assets/fonts'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import { TextHeading, TextSubtitle } from '@/theme/Text'
import LayoutForAll from '@/components/LayoutForAll'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from '@/config/axios.config'
import Link from 'next/link'
import Image from 'next/image'

const Direction = () => {
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
  console.log(packages);

  useEffect(() => {
    getPackages();
  }, []);

  return (
    <LayoutForAll>
      <Head>
        <title>{t('direction.pageTitle')}</title>
      </Head>
      <section className="bg-cube bg-main text-white min-h-[400px] flex items-center justify-center">
        <div className="pt-[150px] pb-[150px] w-full custom-container flex flex-col gap-6">
          <AnimatedHeader
            className={`text-center font-black md:leading-none leading-[70px] uppercase lg:text-[80px] md:text-[70px] text-[60px] ${unbounded.className}`}
            text={t("direction.title")}
          />
          <BronPaket />
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
            : <ul className="grid md:grid-cols-4 grid-cols-2 gap-3">
              {packages?.map((data) => {
                return (
                  <li key={data.id}>
                    <div className="cursor-pointer w-full h-auto">
                      <Link
                        href={{
                          pathname: "/view/direction/[id]",
                          query: { id: data.id },
                        }}
                      >
                        <Image
                          src={"/images/placeholder.png"}
                          alt={data.createdAt}
                          width={200}
                          height={200}
                          className="w-full h-full rounded-[20px]"
                        />
                      </Link>
                    </div>
                    <TextHeading className={"capitalize"}>
                      {data.where_uz}
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
                          <>{data.price}mln dan boshlab</>
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

export default Direction