import '../styles/globals.css'
import type { AppProps } from 'next/app';


const SwipeJobs = ({ Component, pageProps }: AppProps) => (
    <Navbar />
    <Toaster />
    <Component {...pageProps} />
)

export default SwipeJobs
