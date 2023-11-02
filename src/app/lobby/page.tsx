'use client'

import styles from '@/styles/Lobby.module.css';
import { useAuth } from "@clerk/nextjs";
import { User } from '../classes/User';
import Userlist from './../../components/Userlist';

export default function Lobby() {

    const { isSignedIn } = useAuth();

    const userArray = [
        new User(1, "András", isSignedIn ? true : false),
        new User(1, "Dávid", false),
        new User(1, "John", false)
    ];

    return (
        <div className={styles.lobby}>
            <div className={styles.chat}>
                <div className={styles.messages}>messages</div>
                <div className={styles.input}>
                    <div className={styles.message}>
                        <input type="text" className={styles.inputBox} />
                    </div>
                    <div className={styles.sendButton}>
                        <button>Send</button>
                    </div>
                </div>
            </div>
            <div className={styles.players}>
                <Userlist user={userArray}/>
            </div>
        </div>
    )
}