import '../styles/globals.css'
import type { AppProps } from 'next/app';
import Layout from '../components/baseLayout/Layout';


const SwipeJobs = ({ Component, pageProps }: AppProps) => (
 
  const [loading, setLoading] = useState<boolean>(false);
  Router.events.on('routeChangeStart', () => {
    setLoading(true);
  });

  Router.events.on('routeChangeComplete', () => {
    setLoading(false);
  });

  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default SwipeJobs
