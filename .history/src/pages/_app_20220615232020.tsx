import '../styles/globals.css'
import type { AppProps } from 'next/app';
import Layout from '../components/';


const SwipeJobs = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
    </Layout>
)

export default SwipeJobs
