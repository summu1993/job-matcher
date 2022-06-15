import '../styles/globals.css'
import type { AppProps } from 'next/app';


const SwipeJobs = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
    <Layout></Layout>
)

export default SwipeJobs
