'use client'

import styles from '@/styles/Lobby.module.css';
import Userlist from '../../components/Userlist';
import React, { useState, useEffect } from 'react';

export default function Lobby() {

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
                <Userlist />
            </div>
        </div>
    )
}