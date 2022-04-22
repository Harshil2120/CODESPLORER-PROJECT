import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { ThemeProvider } from 'next-themes'
import Footer from '../components/Footer'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute='class'>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-VGKM3MPGF4'
        strategy='lazyOnload'
      />
      <Script id='google-analytics' strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-VGKM3MPGF4');
        `}
      </Script>
    </>
  )
}

export default MyApp
