import styles from '@/styles/Layout.module.css';
import LoginButton from '../login/login';
import LogoutButton from '../logout/logout';
import React, { useEffect, useState } from 'react';
import { useConvexAuth, useMutation } from "convex/react";
import { useAuth0 } from "@auth0/auth0-react";
import { api } from "@/_generated/api";
 
export default function Layout({ children }) {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const { user } = useAuth0();
  
  return (
    <>
      <div className={styles.navbar}>
        <ul className={styles.navlist}>
            <li className={styles.listitem}>Logo goes here</li>
            <li className={styles.listitem}>Lobby</li>
            <li className={styles.listitem}>Leaderboard</li>
            <li className={styles.listitem}>How to Play</li>
            <li className={styles.listitem}>{isAuthenticated ? (`Logged in as ${user?.name}`) : 'Not logged in'}</li>
            <li className={styles.listitem}>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</li>
        </ul>
      </div>
      <main>{children}</main>
    </>
  )
}