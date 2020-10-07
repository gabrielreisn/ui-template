import React, { FunctionComponent, Component } from 'react'
import Head from 'next/head'
import 'constants/i18n'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../../mocks')
}

type Props = {
  Component: typeof Component
  pageProps: any
}

const MyApp: FunctionComponent<Props> = ({ Component, pageProps }: Props) => {
  return (
    <>
      <Head>
        <title>UI-template</title>
        <meta charSet="utf-8" />
        <meta lang="en" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="/reset.css" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
