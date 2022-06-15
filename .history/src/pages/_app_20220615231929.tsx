import '../styles/globals.css'


const SwipeJobs = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Navbar />
    <Toaster />
    <Component {...pageProps} />
  </Provider>
)

export default SwipeJobs
