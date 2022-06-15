// import '../styles/globals.css'
import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Router from 'next/router'
import { WorkerProvider } from '../contexts/WorkerContext'
import Layout from '../components/baseLayout/Layout'

const Loader = dynamic(() => import('../components/Loader'))

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState<boolean>(false)
  Router.events.on('routeChangeStart', () => {
    setLoading(true)
  })

  Router.events.on('routeChangeComplete', () => {
    setLoading(false)
  })

  return (
    <React.Fragment>
      {loading && <Loader />}
      <WorkerProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WorkerContext>
    </React.Fragment>
  )
}

export default MyApp