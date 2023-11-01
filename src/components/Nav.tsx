"use client"
import styles from '@/styles/Layout.module.css';
import { UserButton, SignOutButton, SignInButton } from '@clerk/nextjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

const Nav = () => {
    const { isSignedIn, user, isLoaded } = useUser();

    const router = useRouter();

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
        </nav>
    )
}

export default Nav;