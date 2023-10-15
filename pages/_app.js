import { Footer, Navbar } from '@/sections'
import { appWithTranslation } from "next-i18next";
import { ConfigProvider } from 'antd';
import { poppins } from '@/public/assets/fonts';
import '@/styles/globals.css'


function App({ Component, pageProps }) {
  return <main>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: poppins.style.fontFamily
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
