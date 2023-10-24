import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router';
import { TextSubtitle } from '@/theme/Text';
import { IconMoney, IconTelegram } from '@/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { replaceWithLocale } from "@/layouts/replaceWithLocale"
import Head from 'next/head';
import Image from 'next/image';
import Plane from '@/icons/Plane';
import axios from "axios"
import Link from 'next/link';
import { Error, Loading } from '@/components';

const OpenDirection = () => {
  // console.log(tourPackage, "user");
  const { t, i18n } = useTranslation('common')
  const router = useRouter()
  console.log(router);
  const [tourPackage, setTourPackage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getPackages = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const { data } = await axios.get(`https://tour-spsn.onrender.com/api/travel/${router.query.id}`);
      setTourPackage(data);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getPackages();
  }, [router]);

  if (isLoading) {
    return (
      <div className='custom-container py-[150px]'>
        <Loading />
      </div>
    )
  }

  if (isError) {
    return (
      <div className='custom-container py-[150px]'>
        <Error />
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{tourPackage.from_uz}	&rarr; {tourPackage.where_uz}</title>
      </Head>
      <section className='sm:pt-[150px] pt-[100px] pb-[50px] flex flex-col gap-6 custom-container'>
        <div className='w-full'>
          <Image src={'/images/big-placeholder.png'} alt='placeholder' width={500} height={500} className='w-full rounded-[20px]' />
        </div>
        <div className='sm:w-fit w-full rounded-[5px] text-white flex sm:flex-row flex-col sm:items-center items-start sm:gap-4 gap-2'>
          <div className='sm:w-fit w-full flex flex-row items-center gap-2 bg-main px-4 py-4 rounded-[10px]'>
            <Plane fatherClass={'fill-white rotate-[50deg]'} />
            <TextSubtitle className={"!text-white capitalize"}>{t("openpackage.from")}: <span className='font-semibold'>{tourPackage.from_uz}</span></TextSubtitle>
          </div>
          <div className='sm:w-fit w-full flex flex-row items-center gap-2 bg-main px-4 py-4 rounded-[10px]'>
            <Plane fatherClass={'fill-white rotate-[130deg]'} />
            <TextSubtitle className={"!text-white capitalize"}>{t("openpackage.where")}: <span className='font-semibold'>{tourPackage.where_uz}</span></TextSubtitle>
          </div>
          <div className='sm:w-fit w-full flex flex-row items-center gap-2 bg-main px-4 py-4 rounded-[10px]'>
            <IconMoney fatherClass={''} />
            <TextSubtitle className={"!text-white capitalize"}>{t("openpackage.price")}: <span className='font-semibold'>{tourPackage.price} so&apos;m</span></TextSubtitle>
          </div>
        </div>
        <div className='bg-main/[0.03] p-4 border rounded-[10px] flex flex-col gap-2'>
          <TextSubtitle className={'text-start !text-black'}>{tourPackage.descruzion_uz}</TextSubtitle>
        </div>
        <div className='bg-main/[0.03] p-4 border rounded-[10px] flex flex-col gap-2'>
          <TextSubtitle className={'text-start !text-black'}>{t("openpackage.from")}: {tourPackage.from_uz}</TextSubtitle>
        </div>
        <div className='bg-main/[0.03] p-4 border rounded-[10px] flex flex-col gap-2'>
          <TextSubtitle className={'text-start !text-black'}>{t("openpackage.where")}: {tourPackage.where_uz}</TextSubtitle>
        </div>
        <div className='bg-main/[0.03] p-4 border rounded-[10px] flex flex-col gap-2'>
          <TextSubtitle className={'text-start !text-black'}>{t("openpackage.days")}: {tourPackage.days
          } {t("openpackage.day")} / {tourPackage.days - 1} {t("openpackage.night")}</TextSubtitle>
        </div>
        <div className='bg-main/[0.03] p-4 border rounded-[10px] flex flex-col gap-2'>
          <TextSubtitle className={'text-start !text-black'}>{t("openpackage.fly")}: {tourPackage.fly_date}</TextSubtitle>
        </div>
        <div className='bg-main p-4 border rounded-[10px] flex flex-col gap-2'>
          <TextSubtitle className={'text-start !text-white'}>{t("openpackage.price")}: {tourPackage.price} So&apos;m</TextSubtitle>
        </div>
        <Link href={'/'}>
          <div className='sm:w-fit w-full flex flex-row items-center gap-2 bg-main/[0.03] p-4 border border-main rounded-[10px]'>
            <IconTelegram childClass={'!stroke-main'} />
            <TextSubtitle className={"!text-black capitalize"}>{t('openpackage.manager')}</TextSubtitle>
          </div>
        </Link>
      </section>
    </>
  )
}

// export async function getServerSideProps(props) {
//   return {
//     props: {
//       ...(await serverSideTranslations(props.locale, [
//         'common'
//       ])),
//     },
//   }
// }

export const getStaticPaths = async ({ locales }) => {
  const res = await fetch(`${server}/api/posts`);
  const posts = await res.json();

  const ids = posts.map((post) => post.id);
  const paths = ids
    .map((id) =>
      locales.map((locale) => ({
        params: { id: id.toString() },
        locale, //locale should not be inside `params`
      }))
    )
    .flat(); // to avoid nested arrays

  return {
    paths,
    fallback: false,
  };
};

export default OpenDirection