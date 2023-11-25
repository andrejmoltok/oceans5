'use client'

import styles from '@/styles/Nav.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Nav = () => {

    const router = useRouter();

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
                        {/* Next-Auth components */}
                    </div>
                </ul>
            </div>
            <div className={styles.spacer}></div>
        </>
    )
}

export default Nav;