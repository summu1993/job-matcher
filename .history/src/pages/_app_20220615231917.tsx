import '../styles/globals.css'


const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Navbar />
    <Toaster />
    <Component {...pageProps} />
  </Provider>
)

export default MyApp
