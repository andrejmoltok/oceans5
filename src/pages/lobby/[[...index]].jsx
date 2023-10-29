import styles from '@/styles/Lobby.module.css';
import React, { useState, useEffect, useMemo } from 'react';
// import WebSocket from 'ws';

export default function Lobby() {

    
    

    return (
        <>
            <div className={styles.lobby}>
                <div className={styles.chat}>
                    <div className={styles.messages}>
                        
                    </div>
                    <div className={styles.input}>
                        <div className={styles.message}>
                            <input type="text" className={styles.inputBox} value={} onChange={(e) => (e.target.value)} />
                        </div>
                        <div className={styles.sendButton}>
                            <button >Send</button>
                        </div>
                    </div>
                </div>
                <div className={styles.players}>userlist</div>
            </div>
        </>
    )
}