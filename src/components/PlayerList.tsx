'use client'
import React from 'react';
import styles from '@/styles/Playerlist.module.css';
import { Player } from '@/app/classes/Player';

export default function PlayerList({ playerArr }: { playerArr: Player[] }) {
    const playerArray: Player[] = playerArr;

    return (
        <>
            {/* Search component comes here */}
            <div className={styles.playerContainer}>
                {playerArray.map((aPlayer: Player, index: number) => (
                    <div key={index}>
                        <div className={styles.username}>
                            <span className={styles.onlineBull}>&bull;</span>{aPlayer.playerName}
                        </div>
                        <div className={styles.info}>{aPlayer.status}</div>
                    </div>
                ))}
            </div>
        </>
    )
}