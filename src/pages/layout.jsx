'use client'

import styles from '@/styles/Layout.module.css';
import { UserButton, SignOutButton, SignInButton } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@clerk/nextjs';

export default function Layout({ children }) {

  const { isSignedIn, isLoaded, signOut, userId, sessionId } = useAuth();

  const router = useRouter();

  return (
    <>
      {<div className={styles.navbar}>
        <ul className={styles.navlist}>
          <li className={styles.listitem}>Logo goes here</li>
          <li className={styles.listitem}>Lobby</li>
          <li className={styles.listitem}>Leaderboard</li>
          <li className={styles.listitem}>How to Play</li>
          {isSignedIn ? <li className={styles.listitem}><UserButton afterSignOutUrl="/" /></li> : <li className={styles.listitem}>Not logged in</li>}
          {!isSignedIn && <li className={styles.listitem}><button onClick={() => {router.push('./sign-in')}}>Sign In</button></li>}
        </ul>
      </div>}
      <main>{children}</main>
    </>
  )
}