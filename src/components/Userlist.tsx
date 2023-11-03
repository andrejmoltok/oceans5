import React from 'react';
import styles from './../styles/Userlist.module.css';
import { User } from './../app/classes/User';

export default function Userlist({user} : any) {
    return (
        <>
            {/* Search component comes here */}
            {user.map((user: User, index: number) => (
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
            ))}
        </>
    )
}