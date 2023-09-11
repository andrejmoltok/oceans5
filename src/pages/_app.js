import '@/styles/globals.css'
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ConvexProviderWithAuth0 } from "convex/react-auth0";
import { Auth0Provider } from "@auth0/auth0-react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export default function App({ Component, pageProps }) {
 return (
  <Auth0Provider
      domain="dev-358ojbrhhp0stp2h.eu.auth0.com"
      clientId="lN9y3qvUBhx51LO6w4QuDUGYyaqGXomi"
      authorizationParams={{
        redirect_uri: 'window.location.origin',
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <ConvexProviderWithAuth0 client={convex}>
        <Component {...pageProps} />
      </ConvexProviderWithAuth0>
    </Auth0Provider>
 )
}
