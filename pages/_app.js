import { Footer, Navbar } from '@/sections'
import { appWithTranslation } from "next-i18next";
import { ConfigProvider } from 'antd';
import '@/styles/globals.css'

function App({ Component, pageProps }) {
  return <main>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Poppins'
        },
        components: {
          DatePicker: {
            activeBg: '#fff',
            activeShadow: 'none',
            borderRadius: '0',
            hoverBg: '#fff',
            fontSize: '16px'
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
