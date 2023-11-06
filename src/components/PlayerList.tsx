'use client'
import React from 'react';
import styles from './../styles/Userlist.module.css';
import { Player } from '../app/classes/Player';

export default function PlayerList({ playerArr }: { playerArr: Player[] }) {
    const playerArray: Player[] = playerArr;

    return (
        <>
            {/* Search component comes here */}
            {playerArray.map((aPlayer: Player, index: number) => (
                <div className={styles.container} key={index}>
                    
                    <div className={styles.username}>
                        <span className={styles.onlineBull}>&bull;</span>{aPlayer.playerName}
                    </div>
                    <div className={styles.info}>{aPlayer.status}</div>
                    {/* {player.online === true ?
                        <div className={styles.status}>
                        </div> :
                        <div className={styles.status}>
                            <div className={styles.offlineBull}>&bull;</div>
                            <div className={styles.username}>{aPlayer.playerName}</div>
                            <div className={styles.info}>{aPlayer.status}</div>
                        </div>} */}
                </div>
            ))}
        </>
    )
}