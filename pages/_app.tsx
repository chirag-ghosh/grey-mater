import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import '../styles/app.scss'
import "prismjs/themes/prism-okaidia.css";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
