import '../styles/globals.css'
import Navbar from '../components/Navbar'
import {ThemeProvider} from 'next-themes'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
        <Component {...pageProps} />
        <Footer/>
      </ThemeProvider>
    
  )
}

export default MyApp
