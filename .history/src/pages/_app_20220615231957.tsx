import '../styles/globals.css'
import type { AppProps } from 'next/app';


const SwipeJobs = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
)

export default SwipeJobs
