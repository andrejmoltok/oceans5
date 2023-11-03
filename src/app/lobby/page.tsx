'use client'

import styles from '@/styles/Lobby.module.css';
import { Player } from '../classes/Player';

export default function Lobby() {

    const userArray: Player[] = []

    return (
        <>
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
                    {userArray.map((user, index) => (
                        <div key={index}>{user.userName}</div>
                    ))}
                </div>
            </div>
        </>
    )
}