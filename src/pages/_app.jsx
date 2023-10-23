import '@/styles/globals.css'
import Layout from "@/pages/layout";
import { ConvexReactClient } from "convex/react";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}
