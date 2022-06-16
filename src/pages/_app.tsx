// import '../styles/globals.css'
import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Router from 'next/router'
import { WorkerProvider } from '../contexts/WorkerContext'
import Layout from '../components/baseLayout/Layout'
import { ToastContainer } from "react-toastify";
import toast from "../components/Toast/toast";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WorkerProvider>
    </React.Fragment>
  )
}

export default MyApp
