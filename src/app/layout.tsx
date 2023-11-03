import localFont from 'next/font/local'
import Nav from '@/components/Nav';

import '@/styles/globals.css'
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "./ConvexClientProvider";
import { Player } from './classes/Player';


const emblemaOne = localFont({
  src: './font/EmblemaOne-Regular.ttf',
  display: 'swap',
});

const playerArray: Player[] = [];

export function addPlayer(player: Player) {
  playerArray.push(player);
  return playerArray;
}

import { Server } from 'socket.io';

// Create a socket.io server
const ioHandler = (req: any, res:any) => {
    if (!res.socket.server.io) {
        console.log('*First use, starting Socket.IO');
        const io = new Server(res.socket.server);

        // Listen for connection events
        io.on('connection', () => {
            console.log(`Socket connected.`);
        });
        res.socket.server.io = io;
    }
    res.end();
};

module.exports = ioHandler;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  

  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className={emblemaOne.className}>
        <ConvexClientProvider>
          <header>
            <Nav />
          </header>
          <main>
            {children}
          </main>
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider >
  )
}