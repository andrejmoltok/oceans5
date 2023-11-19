'use client'

import styles from '@/styles/Nav.module.css';
import { UserButton, SignInButton, SignUpButton } from '@clerk/nextjs';
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';

const Nav = () => {

    const router = useRouter();
    const { isSignedIn, user, isLoaded } = useUser();

    return (
        <>
            <div className={styles.navbar}>
                <ul className={styles.navlist}>
                    <li className={styles.logo} >
                        <a href="/">
                            <Image src="/oceans5.png" alt="Oceans5 logo with a medieval ship and text saying Oceans5" width={185} height={64} priority />
                        </a>
                    </li>
                    <li className={styles.listitem}><a href="/lobby" style={{ textDecoration: "none", color: '#79bedb' }}>Lobby</a></li>
                    <li className={styles.listitem}>Leaderboard</li>
                    <li className={styles.listitem}>How to Play</li>
                    <li className={styles.listitem}>About</li>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <SignedIn>
                            <li className={styles.listitem}>Hello, {user?.username}!</li>
                            <li className={styles.listitem}><UserButton afterSignOutUrl="/" /></li>
                        </SignedIn>
                        <SignedOut>
                            <li className={styles.listitem}>
                                <SignInButton>
                                    <button onClick={() => { router.push('./sign-in') }}>Sign In</button>
                                </SignInButton>
                            </li>
                            <li className={styles.listitem}>
                                <SignUpButton>
                                    <button onClick={() => { router.push('./sign-up') }}>Sign Up</button>
                                </SignUpButton>
                            </li>
                        </SignedOut>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Nav;