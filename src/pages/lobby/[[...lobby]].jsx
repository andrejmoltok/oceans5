import styles from '@/styles/Lobby.module.css';
import { useQuery } from "convex/react";
import { api } from "@/_generated/api";

export default function Lobby() {
    
    return (
        <>
            <div className={styles.lobby}>
                <div className={styles.chat}>
                    <div className={styles.messages}></div>
                    <div className={styles.input}>
                        <div className={styles.message}>
                            <input type="text" className={styles.inputBox}></input>
                        </div>
                        <div className={styles.sendButton}>
                            <button>Send</button>
                        </div>
                    </div>
                </div>
                <div className={styles.players}>{users?.map(({_id, name}) => {return <div key={_id}>{name}</div>})}</div>
            </div>
        </>
    )
}