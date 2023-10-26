import { TextSubtitle } from '@/theme/Text';
import { useRouter } from 'next/router';
import { IconLoading, IconMoney, IconTelegram, IconWarning } from '@/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Plane from '@/icons/Plane';
import axios from "axios"
import Link from 'next/link';
import LayoutForDetails from '@/components/LayoutForDetails';
import formatMoney from '@/layouts/formatMoney';
import { SellModal } from '@/components';
import moment from 'moment';

const OpenSpecial = () => {
  const router = useRouter()
  const [tourPackage, setTourPackage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [sellOpen, setSellOpen] = useState(false)
  const [id, setId] = useState('')

  const getPackages = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const { data } = await axios.get(`https://tour-spsn.onrender.com/api/travel/${router?.query?.id}`);
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
      <LayoutForDetails>
        <Head>
          <title>Yuklanmoqda...</title>
        </Head>
        <div className='custom-container py-[150px]'>
          <div className="w-full h-[200px] bg-main/[0.03] border rounded-[10px] flex items-center justify-center flex-col">
            <IconLoading />
            <TextSubtitle className={"!text-black"}>Yuklanmoqda...</TextSubtitle>
          </div>
        </div>
      </LayoutForDetails>
    )
  }

  if (isError) {
    return (
      <LayoutForDetails>
        <Head>
          <title>Ma&apos;lumotlar yuklanishida xatolik</title>
        </Head>
        <div className='custom-container py-[150px]'>
          <div className="w-full h-[200px] bg-secondary/[0.03] border rounded-[10px] flex items-center justify-center flex-col">
            <IconWarning childClass={"stroke-secondary"} />
            <TextSubtitle className={"!text-black"}>Ma&apos;lumotlar yuklanishida xatolik</TextSubtitle>
            <TextSubtitle className={"!text-black"}>Qaytadan urinib ko&apos;ring!</TextSubtitle>
          </div>
        </div>
      </LayoutForDetails>
    )
  }

  return (
    <LayoutForDetails>
      <Head>
        <title>{tourPackage.from_uz}	&rarr; {tourPackage.where_uz}</title>
      </Head>
      <section className='sm:pt-[150px] pt-[100px] pb-[50px] flex flex-col gap-6 custom-container'>
        <div className='w-full'>
          <Image src={tourPackage.image} alt='placeholder' width={500} height={500} className='w-full rounded-[20px] h-[200px] object-cover object-center' />
        </div>
        <div className='sm:w-fit w-full rounded-[5px] text-white flex sm:flex-row flex-col sm:items-center items-start sm:gap-4 gap-2'>
          <div className='sm:w-fit w-full flex flex-row items-center gap-2 bg-main px-4 py-4 rounded-[10px]'>
            <Plane fatherClass={'fill-white rotate-[50deg]'} />
            <TextSubtitle className={"!text-white capitalize"}>Qayerdan: <span className='font-semibold'>{tourPackage.from_uz}</span></TextSubtitle>
          </div>
          <div className='sm:w-fit w-full flex flex-row items-center gap-2 bg-main px-4 py-4 rounded-[10px]'>
            <Plane fatherClass={'fill-white rotate-[130deg]'} />
            <TextSubtitle className={"!text-white capitalize"}>Qayerga: <span className='font-semibold'>{tourPackage.where_uz}</span></TextSubtitle>
          </div>
          <div className='sm:w-fit w-full flex flex-row items-center gap-2 bg-main px-4 py-4 rounded-[10px]'>
            <IconMoney fatherClass={''} />
            <TextSubtitle className={"!text-white capitalize"}>Narx: <span className='font-semibold'>{formatMoney(tourPackage.price)} so&apos;m</span></TextSubtitle>
          </div>
        </div>
        <div className='bg-main/[0.03] p-4 border rounded-[10px] flex flex-col gap-2'>
          <TextSubtitle className={'text-start !text-black'}>{tourPackage.description_uz}</TextSubtitle>
        </div>
        <div className='bg-main/[0.03] p-4 border rounded-[10px] flex flex-col gap-2'>
          <TextSubtitle className={'text-start !text-black'}>Qayerdan: {tourPackage.from_uz}</TextSubtitle>
        </div>
        <div className='bg-main/[0.03] p-4 border rounded-[10px] flex flex-col gap-2'>
          <TextSubtitle className={'text-start !text-black'}>Qayerga: {tourPackage.where_uz}</TextSubtitle>
        </div>
        <div className='bg-main/[0.03] p-4 border rounded-[10px] flex flex-col gap-2'>
          <TextSubtitle className={'text-start !text-black'}>Sayohat davomiyligi: {tourPackage.days
          } kun / {tourPackage.days - 1} tun</TextSubtitle>
        </div>
        <div className='bg-main/[0.03] p-4 border rounded-[10px] flex flex-col gap-2'>
          <TextSubtitle className={'text-start !text-black'}>Uchish sanasi: {moment(tourPackage.fly_date).format("YYYY-MM-DD")}</TextSubtitle>
        </div>
        <div className='bg-main p-4 border rounded-[10px] flex flex-col gap-2'>
          <TextSubtitle className={'text-start !text-white'}>Narx: {formatMoney(tourPackage.price)} So&apos;m</TextSubtitle>
        </div>
        <div className='flex flex-row gap-3 w-full justify-end'>
          <Link href={'/'}>
            <div className='sm:w-fit w-full flex flex-row items-center gap-2 bg-main/[0.03] p-4 border border-main rounded-[10px]'>
              <IconTelegram childClass={'!stroke-main'} />
              <TextSubtitle className={"!text-black capitalize"}>Menejer bilan bog&apos;lanish</TextSubtitle>
            </div>
          </Link>
          <div
            onClick={() => {
              setId(tourPackage)
              setSellOpen(!sellOpen)
            }}
            className='sm:w-fit w-full flex flex-row items-center cursor-pointer gap-2 bg-secondary p-4 rounded-[10px]'
          >
            <TextSubtitle className={"!text-white capitalize"}>Sotib olish</TextSubtitle>
          </div>
        </div>
        <SellModal setOpen={setSellOpen} open={sellOpen} id={id} />
      </section>
    </LayoutForDetails>
  )
}

export default OpenSpecial