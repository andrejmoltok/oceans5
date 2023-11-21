'use client'

import styles from '@/styles/Lobby.module.css';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@clerk/nextjs';

import Chat from '@/components/Chat';
import { io, Socket } from 'socket.io-client';

import PlayerList from '@/components/PlayerList';
import { Player } from '@/app/classes/Player';
import { User } from '@/app/classes/User';
import { Guest } from '@/app/classes/Guest';
import { fetchPlayer } from '../services/dbService';

import { useQuery, useConvexAuth } from "convex/react";
import { api } from "@/convex/_generated/api";


let currentPlayer: Player;

const setPlayer = (user: any, socketId: string): void => {
    if (user) {
        console.log(user);

        try {
            currentPlayer = fetchPlayer(user);
        } catch (e) {
            console.log(e);
            // ToDo: handle fetch error;
        }
    } else {
        const guest = new Guest(socketId, true);
        currentPlayer = guest;
    }
}

export default function Lobby() {
    const [message, setMessage] = useState('');
    const [playerArray, setPlayerArray] = useState<Player[]>([]);
    const [chatMessages, setChatMessages] = useState<{ sender: Player, msg: string }[]>([]);
    const [socket, setSocket] = useState<Socket | null>(null);
    const { isSignedIn, isLoaded } = useAuth();
    const { isAuthenticated } = useConvexAuth();
    const user: any = useQuery(api.users.readUserByToken);

    useEffect(() => {

        if ((isLoaded && isSignedIn && isAuthenticated) || user === null) {
            var nick: string;
            var time: any;

            const newSocket = io('http://localhost:3001/user');

            newSocket.on('connect', () => {
                setPlayer(user, newSocket.id);
                newSocket.emit('player-joined', currentPlayer);
                console.log('Kapcsolat létrehozva a WebSocket szerverrel.');
            });

            newSocket.on('user-list', (playerArr: Player[]) => {
                setPlayerArray(playerArr);
            });

            newSocket.on('lobby-chat', (sender: Player, msg: string) => {
                setChatMessages((prevMessages) => [{ sender: sender, msg: msg }, ...prevMessages]);
            });

            setSocket(newSocket);

            return () => {
                if (newSocket) {
                    newSocket.disconnect();
                }
            }
        }
    }, [user, isAuthenticated, isLoaded, isSignedIn]);

    const sendMessage = (message: string) => {
        if (socket) {
            socket.emit('lobby-chat', currentPlayer, message);
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