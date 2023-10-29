import styles from '@/styles/Layout.module.css';
import { UserButton, SignOutButton, SignInButton } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useUser } from '@clerk/nextjs';
import localFont from 'next/font/local'

const emblemaOne = localFont({
  src: './font/EmblemaOne-Regular.ttf',
  display: 'swap',
})

export default function Layout({ children }) {

  const { isSignedIn, user, isLoaded } = useUser();

  const router = useRouter();

  return (
    <div className={emblemaOne.className}>
      <div className={styles.navbar}>
        <ul className={styles.navlist}>
          <li className={styles.logo} onClick={() => { router.push('/') }}>
            <Image src="/oceans5.png" alt="Oceans5 logo with a medieval ship and text saying Oceans5" width={185} height={64} priority />
          </li>
          <li className={styles.listitem} onClick={() => { router.push('/lobby') }}>Lobby</li>
          <li className={styles.listitem}>Leaderboard</li>
          <li className={styles.listitem}>How to Play</li>
          <li className={styles.listitem}>About</li>
          {(isSignedIn && isLoaded) ?
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <li className={styles.listitem}>Hello, {user?.username}!</li>
              <li className={styles.listitem}><UserButton afterSignOutUrl="/" /></li>
            </div> :
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <li className={styles.listitem}><button onClick={() => { router.push('./sign-in') }}>Sign In</button></li>
              <li className={styles.listitem}><button onClick={() => { router.push('./sign-up') }}>Sign Up</button></li>
            </div>}
        </ul>
      </div>
      <main>
        {children}
      </main>
    </div>
  )
}