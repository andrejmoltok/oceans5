'use client'

import styles from '@/styles/Lobby.module.css';
import Userlist from '../../components/Userlist'
import { Player } from '../classes/Player';
import React, { useState, useEffect } from 'react';

const playerArray: Player[] = [];

export function addPlayer(player: Player) {
    playerArray.push(player);
    return playerArray;
}

export default function Lobby() {

    const [clientPlayerArray, setClientPlayerArray] = useState<Player[]>([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('http://localhost:3000/api/set-user', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const response = await res.json();
            setClientPlayerArray(response);
        }

        fetchData();
    }, []);

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
                {clientPlayerArray!.map((player, index) => (
                    <div key={index}>{player.userName}</div>
                ))}
            </div>
        </div>
    )
}