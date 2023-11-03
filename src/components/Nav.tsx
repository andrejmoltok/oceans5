"use client"
import styles from '@/styles/Layout.module.css';
import { UserButton, SignInButton, SignUpButton } from '@clerk/nextjs';
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';

const Nav = () => {
    const router = useRouter();
    const { isSignedIn, user, isLoaded } = useUser();

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user && isSignedIn && isLoaded) {
            setLoading(true);

            fetch('/api/set-user', {
                method: 'GET',
            })
                .then(response => response.json())
                .then(result => {
                    setUserData(result); // Az adatok frissítése
                    setLoading(false); // A betöltés vége
                })
                .catch(error => {
                    console.error('Hiba történt az API hívás során:', error);
                    setLoading(false); // Hiba esetén is befejezés
                });
        } else {
            console.log("Signed out!");

        }
    }, [user]);

    return (
        <nav>
            <div className={styles.navbar}>
                <ul className={styles.navlist}>
                    <li className={styles.logo} onClick={() => { router.push('/') }}>
                        <Image src="/oceans5.png" alt="Oceans5 logo with a medieval ship and text saying Oceans5" width={185} height={64} priority />
                    </li>
                    <li className={styles.listitem} onClick={() => { router.push('/lobby') }}>Lobby</li>
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
        </nav>
    )
}

export default Nav;