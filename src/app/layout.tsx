import localFont from 'next/font/local'
import Nav from '@/components/Nav';

import '@/styles/globals.css'

const montserrat = localFont({
  src: './font/Montserrat.ttf',
  display: 'swap',
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <header>
          <Nav />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
