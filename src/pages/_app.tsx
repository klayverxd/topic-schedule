import AdSense from '@/components/AdSense'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <head><AdSense publisherId='ca-pub-3821668752796554' /></head>
      <Component {...pageProps} />
    </>
  )
}
