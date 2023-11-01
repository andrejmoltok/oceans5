import localFont from 'next/font/local'
import Nav from '@/components/Nav';

import '@/styles/globals.css'
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import ConvexClientProvider from "./ConvexClientProvider";


const emblemaOne = localFont({
  src: './font/EmblemaOne-Regular.ttf',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className={emblemaOne.className}>
          <header>
            <Nav />
          </header>
          <main>
            <ConvexClientProvider>{children}</ConvexClientProvider>
          </main>
        </body>
      </html>
    </ClerkProvider >
  )
}