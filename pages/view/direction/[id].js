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
import axios from "@/config/axios.config"
import Link from 'next/link';
import { Error, Loading } from '@/components';
import { DirectionById } from '@/sections';

const Open = () => {
  // {tourPackage[replaceWithLocale(router, "from_")]}	&rarr; {tourPackage[replaceWithLocale(router, "where_")]}
  return (
    <>
      <Head>
        <title>title</title>
      </Head>
      <section className='sm:pt-[150px] pt-[100px] pb-[50px] flex flex-col gap-6 custom-container'>
        <DirectionById />
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