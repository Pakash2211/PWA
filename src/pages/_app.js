import Layout from "@/components/common/Layout";
import "@/styles/globals.css";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return <QueryClientProvider client={queryClient}>
  <Head>
          <title>{pageProps?.product?.name || 'Tradly'}</title>
          <meta name="description" content={pageProps?.product?.description ||'test'} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href="//localhost.com/" />
          <link rel="icon" href="/favicon.ico" />
  </Head>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  <ReactQueryDevtools initialIsOpen={false} />
   </QueryClientProvider>;
}
