import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState } from 'react'
import { WorkerProvider } from '../contexts/WorkerContext'
import Layout from '../components/baseLayout/Layout'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
 
  return (
    <React.Fragment>
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
