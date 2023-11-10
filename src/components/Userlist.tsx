import React, { useState, useEffect } from 'react';
import styles from './../styles/Userlist.module.css';
import { Player } from './../app/classes/Player';

export default function Userlist() {

    return (
        <>
            {/* Search component comes here */}
            {/* {player.map((user: Player, index: number) => (
                <div key={index}>
                    {user.online === true ? 
                        <div className={styles.status}>
                            <div className={styles.onlineBull}>&bull;</div>
                            <div className={styles.username}>{user.userName}</div>
                            <div className={styles.info}>{user.status}</div>
                        </div> : 
                            <div className={styles.status}>
                                <div className={styles.offlineBull}>&bull;</div>
                                <div className={styles.username}>{user.userName}</div>
                                <div className={styles.info}>{user.status}</div>
                            </div>}
                </div>
            ))} */}
        </>
    )
}