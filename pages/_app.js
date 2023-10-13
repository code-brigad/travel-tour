import { Footer, Navbar } from '@/sections'
import { appWithTranslation } from "next-i18next";
import '@/styles/globals.css'

function App({ Component, pageProps }) {
  return <main>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </main>
}

export default appWithTranslation(App)
