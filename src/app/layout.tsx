import localFont from 'next/font/local'
import Nav from '@/components/Nav';

import '@/styles/globals.css'
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "./ConvexClientProvider";

const emblemaOne = localFont({
  src: './font/EmblemaOne-Regular.ttf',
  display: 'swap',
});

const playerArray: Player[] = []

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <ConvexClientProvider>
        <html lang="en">
          <body className={emblemaOne.className}>
            <header>
              <Nav />
            </header>
            <main>
              {children}
            </main>
          </body>
        </html>
      </ConvexClientProvider>
    </ClerkProvider>
  )
}

export function addPlayer(player: Player) {
  playerArray.push(player);
  return playerArray;
}