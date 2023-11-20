import '../styles/globals.css'
import type { NextComponentType, NextPageContext } from 'next'
import type { AppProps } from 'next/app'

const MyApp: NextComponentType<NextPageContext, any, AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
