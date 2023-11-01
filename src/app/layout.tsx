
import React, { useEffect, useState } from 'react';

import localFont from 'next/font/local'
import Nav from '@/components/Nav';

import '@/styles/globals.css'
import { ConvexReactClient } from "convex/react";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const emblemaOne = localFont({
  src: './font/EmblemaOne-Regular.ttf',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth} children={children}></ConvexProviderWithClerk>
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
    </ConvexProviderWithClerk>
    </ClerkProvider >
  )
}