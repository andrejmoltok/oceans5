import '@/styles/globals.css'
import Layout from "@/pages/components/layout";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export default function App({ Component, pageProps }) {
 return (
      <ConvexProvider client={convex}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ConvexProvider>
 )
}
