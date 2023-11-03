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

    const [player, setPlayer] = useState<Player>([]);

    useEffect(() => {
        async () => {
            await fetch('/api/set-user')
                .then((data) => setPlayer(data))
                .then((error) => console.log(error))
        }
        addPlayer(player)
    },[player]);

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
                <Userlist user={playerArray}/>
            </div>
        </div>
    )
}