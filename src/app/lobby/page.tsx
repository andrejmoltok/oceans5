'use client'

import styles from '@/styles/Lobby.module.css';
import Chat from '@/components/Chat';
import { Player } from '@/app/classes/Player';
import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import PlayerList from '@/components/PlayerList';
import { User } from '../classes/User';
import { Guest } from '../classes/Guest';
import { useUser } from '@clerk/nextjs';

let currentPlayer: Player;;

const setPlayer = (user: any, socketId: string): Player => {
    if (user) {
        return new User(user?.id, user?.username!, 0, 0, true);
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
    const {isSignedIn, user, isLoaded } = useUser();


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
                setChatMessages((prevMessages) => [...prevMessages, msg]);
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
            <Chat chatMessages={chatMessages} sendMessage={sendMessage} >
            </Chat>
            <PlayerList playerArr={playerArray}></PlayerList>
        </div>
    )
}