'use client'

import styles from '@/styles/Lobby.module.css';

import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';

import Chat from '@/components/Chat';
import { io, Socket } from 'socket.io-client';

import PlayerList from '@/components/PlayerList';
import { Player } from '@/app/classes/Player';
import { User } from '@/app/classes/User';
import { Guest } from '@/app/classes/Guest';


let currentPlayer: Player;;

const setPlayer = (user: any, socketId: string): Player => {
    if (user) {
        /* User class constructor data order reference
            ---------------------------------------------------
            new User(userId, userName, xp, level, rank,
                online?, gamesWon?, gamesLost?, gamesPLayed?,
                winRatio?, loseRatio?, avgScore?, totalPoints?,
                accuracyRatio?, playtimeTotal?)
            ---------------------------------------------------
        */
        return new User(user?.id, user?.username!, 0, 1, "Seaman", true);
    } else {
        const guest = new Guest(socketId, true);
        return guest;
    }
}

export default function Lobby() {
    const [message, setMessage] = useState('');
    const [playerArray, setPlayerArray] = useState<Player[]>([]);
    const [chatMessages, setChatMessages] = useState<string[]>([]);
    const [socket, setSocket] = useState<Socket | null>(null);
    const { isSignedIn, user, isLoaded } = useUser();

    useEffect(() => {
        if (isLoaded) {
            const newSocket = io('http://localhost:3001/user');

            newSocket.on('connect', () => {

                currentPlayer = setPlayer(user, newSocket.id);
                newSocket.emit('player-joined', currentPlayer);
                console.log('Kapcsolat létrehozva a WebSocket szerverrel.');
            });

            newSocket.on('user-list', (playerArr: Player[]) => {
                setPlayerArray(playerArr);
            });

            newSocket.on('lobby-chat', (msg: string) => {
                setChatMessages((prevMessages) => [msg, ...prevMessages]);
            });

            setSocket(newSocket);

            return () => {
                if (newSocket) {
                    newSocket.disconnect();
                }
            };
        }
    }, [user, isLoaded, isSignedIn]);

    const sendMessage = (message: string) => {
        if (socket) {
            socket.emit('lobby-chat', message);
            setMessage('');
        }
    };

    return (
        <div className={styles.lobby}>
            <div>
                <Chat chatMessages={chatMessages} sendMessage={sendMessage} >
                </Chat>
            </div>
            <div>
                <PlayerList playerArr={playerArray}></PlayerList>
            </div>
        </div>
    )
}