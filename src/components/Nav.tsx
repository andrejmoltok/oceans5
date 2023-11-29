'use client'

import styles from '@/styles/Nav.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import {
    onAuthStateChanged,
    signInWithGoogle,
    signOut
} from '@/app/services/authService';
import { getPlayerData, setPlayerData } from '@/app/services/databaseService';
// import { getPlayerData, setPlayerData } from '@/app/services/firestoreService';

const Nav = () => {

    const [user, setUser] = useState<any>();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged((authUser: any) => {
            console.log(authUser);
            setUser(authUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    useEffect(() => {
        onAuthStateChanged((authUser: any) => {
            if (user === undefined) return;
            if (user?.email !== authUser?.email) {
                router.refresh();
            }
        });
    }, [user]);

    const router = useRouter();

    const handleSignOut = (event: any) => {
        event.preventDefault();
        signOut();
    };

    const handleSignIn = (event: any) => {
        event.preventDefault();
        signInWithGoogle().then(async(user: any) => {
            const userData = await getPlayerData(user?.uid);
            
            if (!userData) {
                await setPlayerData(user?.uid);
            }
        });
    };

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
                    {user ? (
                        <>
                            <li>{user.displayName}</li>
                            <li>
                                <a href="#" onClick={handleSignOut}>
                                    Sign Out
                                </a>
                            </li>
                        </>
                    ) : (
                        <>
                        <li>
                            <a href="#" onClick={handleSignIn}>
                                Sign In with Google
                            </a>
                        </li>
                        </>
                    )}
                </ul>
            </div>
            <div className={styles.spacer}></div>
        </>
    )
}

export default Nav;