
import styles from '@/styles/Layout.module.css';
import { SignUpButton, SignOutButton, SignInButton } from '@clerk/nextjs';
import Image from 'next/image';
import { currentUser } from '@clerk/nextjs';

export default async function Nav() {
    
    const user = await currentUser();

    return (
        <>
            <div className={styles.navbar}>
                <ul className={styles.navlist}>
                    <li className={styles.logo} >
                        <a href="/">
                            <Image src="/oceans5.png" alt="Oceans5 logo with a medieval ship and text saying Oceans5" width={185} height={64} priority />
                        </a>
                    </li>
                    <li className={styles.listitem}><a href="/lobby" style={{textDecoration: "none", color: '#79bedb'}}>Lobby</a></li>
                    <li className={styles.listitem}>Leaderboard</li>
                    <li className={styles.listitem}>How to Play</li>
                    <li className={styles.listitem}>About</li>
                    {(user) ?
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <li className={styles.listitem}>Hello, {user?.username}!</li>
                            <li className={styles.listitem}><SignOutButton /></li>
                        </div> :
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <li className={styles.listitem}><SignInButton /></li>
                            <li className={styles.listitem}><SignUpButton /></li>
                        </div>}
                </ul>
            </div>
        </>
    )
}