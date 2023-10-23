import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { TextSubtitle } from '@/theme/Text';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Plane from '@/icons/Plane';
import getWindowSize from '@/layouts/getWindowSize';
import { IconMoney } from '@/icons';

const Open = () => {
  const { t, i18n } = useTranslation('common')
  const router = useRouter()
  const { screenSize } = getWindowSize()

  return (
    <>
      <Head>
        <title>{router.query.whereFrom.toUpperCase()}	&rarr; {router.query.where.toUpperCase()}</title>
      </Head>
      <section className='sm:pt-[150px] pt-[100px] pb-[150px] flex flex-col gap-6 custom-container'>
        <div className='w-full'>
          {screenSize.width > 640 ?
            <Image src={'/images/big-placeholder.png'} alt='placeholder' width={500} height={500} className='w-full rounded-[20px]' />
            :
            <Image src={'/images/placeholder.png'} alt='placeholder' width={500} height={500} className='w-full rounded-[20px]' />
          }
        </div>
        <div className='sm:w-fit w-full rounded-[5px] text-white flex sm:flex-row flex-col sm:items-center items-start sm:gap-4 gap-2'>
          <div className='sm:w-fit w-full flex flex-row items-center gap-2 bg-main px-4 py-4 rounded-[10px]'>
            <Plane fatherClass={'fill-white rotate-[50deg]'} />
            <TextSubtitle className={"!text-white capitalize"}>Qayerdan: <span className='font-semibold'>{router.query.whereFrom}</span></TextSubtitle>
          </div>
          <div className='sm:w-fit w-full flex flex-row items-center gap-2 bg-main px-4 py-4 rounded-[10px]'>
            <Plane fatherClass={'fill-white rotate-[130deg]'} />
            <TextSubtitle className={"!text-white capitalize"}>Qayerga: <span className='font-semibold'>{router.query.where}</span></TextSubtitle>
          </div>
          <div className='sm:w-fit w-full flex flex-row items-center gap-2 bg-main px-4 py-4 rounded-[10px]'>
            <IconMoney fatherClass={''} />
            <TextSubtitle className={"!text-white capitalize"}>Narx: <span className='font-semibold'>15.000.00 so'm</span></TextSubtitle>
          </div>
        </div>
        <div className='bg-main/[0.03] p-4 border rounded-[10px] flex flex-col gap-2'>
          <TextSubtitle className={'text-start !text-black'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque ut expedita repellendus eligendi neque deleniti suscipit, et quibusdam dolor quidem, aperiam assumenda nesciunt voluptate obcaecati. Alias, quasi quia. Molestiae provident nisi nihil? Fugit, quisquam. A dolorem doloribus obcaecati natus, laudantium aliquid, officiis, recusandae eum perspiciatis in sint. Architecto labore assumenda laborum tempore, harum et veritatis est unde eligendi. Perferendis iure omnis odit velit? Magni saepe quos adipisci, at consequuntur nisi soluta nulla, distinctio cum amet voluptatem accusantium veniam. Illum asperiores distinctio ab dolorem corrupti dignissimos obcaecati. Praesentium commodi maxime, eaque veniam sit eos sapiente beatae quia omnis modi impedit laborum libero recusandae consequatur, culpa dolorem. Dolores nostrum repellendus impedit fuga aliquam excepturi praesentium, eveniet, ullam molestias optio unde. Qui.
          </TextSubtitle>
        </div>
        <div className='bg-main/[0.03] p-4 border rounded-[10px] flex flex-col gap-2'>
          <TextSubtitle className={'text-start !text-black'}>Qayerdan: Toshkent</TextSubtitle>
        </div>
        <div className='bg-main/[0.03] p-4 border rounded-[10px] flex flex-col gap-2'>
          <TextSubtitle className={'text-start !text-black'}>Qayerga: Jidda</TextSubtitle>
        </div>
        <div className='bg-main/[0.03] p-4 border rounded-[10px] flex flex-col gap-2'>
          <TextSubtitle className={'text-start !text-black'}>Sayohat davomiyligi: 14 kun / 13 tun</TextSubtitle>
        </div>
        <div className='bg-main/[0.03] p-4 border rounded-[10px] flex flex-col gap-2'>
          <TextSubtitle className={'text-start !text-black'}>Narx: 15.000.00</TextSubtitle>
        </div>
        <div className='sm:w-fit w-full flex flex-row items-center gap-2 bg-main/[0.03] p-4 border rounded-[10px]'>
          <Plane fatherClass={'fill-black rotate-[50deg]'} />
          <TextSubtitle className={"!text-black capitalize"}>Menejer bilan bog'lanish</TextSubtitle>
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