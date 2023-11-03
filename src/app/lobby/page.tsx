'use client'

import styles from '@/styles/Lobby.module.css';
import { Player } from '../classes/Player';
import { useEffect } from 'react';
import io from 'socket.io-client';
let socket;

export default function Lobby() {
    // useEffect(() => {
    //     const socket = io('http://localhost:3000/api/websocket'); // A WebSocket szerver címe

    //     socket.on('message', (data: any) => {
    //       console.log('Kapott üzenet a szerverről:', data);
    //     });

    //     return () => {
    //       socket.disconnect();
    //     };
    //   }, []);

    useEffect(() => {


        const socketInitializer = async () => {
            await fetch('/api/websocket')
            socket = io()

            socket.on('connect', () => {
                console.log('connected')
            })
        }
        socketInitializer();
    }, [])

    const userArray: Player[] = []

    return (
        <>
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
                    {userArray.map((user, index) => (
                        <div key={index}>{user.userName}</div>
                    ))}
                </div>
            </div>
        </>
    )
}