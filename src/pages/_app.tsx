import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'

import TagManager from 'react-gtm-module'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-5KVNBFF' })
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
