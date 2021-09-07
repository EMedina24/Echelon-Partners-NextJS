import '../styles/globals.css'

import { CommerceProvider } from 'nextjs-commerce-shopify';
import Layout from '../components/layout'
function MyApp({ Component, pageProps }) {



  
  return(
    <Layout>
    <CommerceProvider
    config={{
      domain: 'echelon-store.myshopify.com',
      token: 'b785f4ee1f8ba77ab66dce258f1b4b8b',
      currencyCode: 'USD'
    }}
  >
  <Component {...pageProps} />

  </CommerceProvider>
  </Layout>
  );
}

export default MyApp
