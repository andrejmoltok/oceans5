'use client'

import styles from '@/styles/Lobby.module.css';

export default function Lobby() {

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
                <div className={styles.players}>userlist</div>
            </div>
        </>
    )
}