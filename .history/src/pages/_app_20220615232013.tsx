import '../styles/globals.css'
import type { AppProps } from 'next/app';
import Layout from '../component/baseLayout/Layout';


const SwipeJobs = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
    </Layout>
)

export default SwipeJobs
