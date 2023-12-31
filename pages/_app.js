import { appWithTranslation } from "next-i18next";
import { ConfigProvider } from "antd";
import { mulish } from "@/public/assets/fonts";
import "@/styles/globals.css";
import "swiper/css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <main className={mulish.className}>
      <Head>
        <meta name="author" content="code-brigade.uz" />
        <meta
          name="description"
          content="Travel House – национальный туроператор, специализирующийся на международном выездном, въездном и внутреннем туризме в Узбекистане."
        />
        <meta
          name="keywords"
          content="отдых цена, тур цена, туры в малайзию, туры в малайзию из ташкента, туры в дубай из ташкента, горящие туры из ташкента, туры в таиланд из ташкента, тур по европе, туры в израиль из ташкента, туры в чехию из ташкента, туры мальдивы из ташкента, морские круизы, тур франция, тур португалия, тур италия, индивидуальные туры, италия туры 2023, туры из ташкента 2023"
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/images/icons/32.png" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/icons/180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/icons/32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/icons/16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/icons/192.png"
        />
        <meta
          property="og:title"
          content="Travel House – национальный туроператор, специализирующийся на международном выездном, въездном и внутреннем туризме в Узбекистане."
        />
        <meta
          property="og:description"
          content="Travel House – национальный туроператор, специализирующийся на международном выездном, въездном и внутреннем туризме в Узбекистане."
        />
        <meta
          name="title"
          content="Travel House – национальный туроператор, специализирующийся на международном выездном, въездном и внутреннем туризме в Узбекистане."
        />
        <meta name="author" content="https://tour-house.uz/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Code Brigade - Dasturchilar Brigadasi"
        />
        <meta property="og:url" content="https://tour-house.uz/" />
        <meta
          property="og:title"
          content="Travel House – национальный туроператор, специализирующийся на международном выездном, въездном и внутреннем туризме в Узбекистане."
        />
        <meta
          property="og:description"
          content="Travel House – национальный туроператор, специализирующийся на международном выездном, въездном и внутреннем туризме в Узбекистане."
        />
        <meta property="og:image" content="/images/icons/192.png" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />

        <meta property="twitter:image" content="/images/icons/192.png" />
        <meta property="twitter:card" content="/images/icons/192.png" />
        <meta property="twitter:title" content="Travel House 777" />
        <meta
          property="twitter:description"
          content="Travel House – национальный туроператор, специализирующийся на международном выездном, въездном и внутреннем туризме в Узбекистане."
        />

        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(95369495, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true
                }
              );`,
          }}
        ></script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/95369495"
              style={{ display: "none" }}
              alt=""
            />
          </div>
        </noscript>
      </Head>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: mulish.style.fontFamily,
          },
          components: {
            DatePicker: {
              activeBg: "#fff",
              activeShadow: "none",
              borderRadius: "0",
              hoverBg: "#fff",
              fontSize: "16px",
              cellWidth: 40,
            },
          },
        }}
      >
        <Component {...pageProps} />
      </ConfigProvider>
    </main>
  );
}

export default appWithTranslation(App);
