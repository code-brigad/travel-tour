import { Footer, Navbar } from '@/sections'
import { appWithTranslation } from "next-i18next";
import { ConfigProvider } from 'antd';
import { mulish } from '@/public/assets/fonts';
import '@/styles/globals.css'
import 'swiper/css';

function App({ Component, pageProps }) {
  return <main className={mulish.className}>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: mulish.style.fontFamily
        },
        components: {
          DatePicker: {
            activeBg: '#fff',
            activeShadow: 'none',
            borderRadius: '0',
            hoverBg: '#fff',
            fontSize: '16px',
            cellWidth: 40
          },
        },
      }}
    >
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ConfigProvider>
  </main>
}

export default appWithTranslation(App)
