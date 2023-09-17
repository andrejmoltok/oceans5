import styles from '@/styles/Lobby.module.css';

export default function Lobby() {
    return (
        <>
            <div className={styles.lobby}>
                <div className={styles.chat}>
                    <div className={styles.messagesBorder}>
                        <div className={styles.messages}></div>
                    </div>
                    <div className={styles.input}>
                        <div className={styles.message}>
                            <input type="text" className={styles.inputBox}></input>
                        </div>
                        <div className={styles.sendButton}>
                            <button>Send</button>
                        </div>
                    </div>
                </div>
                <div className={styles.players}>Players list categorized</div>
            </div>
        </>
    )
}