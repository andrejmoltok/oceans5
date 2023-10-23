'use client'

import styles from '@/styles/Layout.module.css';
import { UserButton, SignOutButton, SignInButton } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useConvexAuth, useMutation } from "convex/react";
import { api } from "@/_generated/api";

export default function Layout({ children }) {

  const { isLoading, isAuthenticated } = useConvexAuth();

  const router = useRouter();

  return (
    <>
      {<div className={styles.navbar}>
        <ul className={styles.navlist}>
          <li className={styles.listitem}>Logo goes here</li>
          <li className={styles.listitem}>Lobby</li>
          <li className={styles.listitem}>Leaderboard</li>
          <li className={styles.listitem}>How to Play</li>
          <li className={styles.listitem}>{isAuthenticated ? <UserButton afterSignOutUrl="/" /> : 'Not logged in'}</li>
          <li className={styles.listitem}>{!isAuthenticated && <button onClick={() => {router.push('./sign-in')}}>Sign In</button>}</li>
        </ul>
      </div>}
      <main>{children}</main>
    </>
  )
}