import '../styles/globals.css'
import type { AppProps } from 'next/app';
import React, { useState } from 'react';
import Router from 'next/router';
import Layout from '../components/baseLayout/Layout';


const SwipeJobs = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  Router.events.on('routeChangeStart', () => {
    setLoading(true);
  });

  Router.events.on('routeChangeComplete', () => {
    setLoading(false);
  });

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
  }

export default SwipeJobs
