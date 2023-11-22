'use client'

import styles from '@/styles/Lobby.module.css';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';

import Chat from '@/components/Chat';
import { io, Socket } from 'socket.io-client';

import PlayerList from '@/components/PlayerList';
import { Player } from '@/app/classes/Player';
import { RegistredPlayer } from '@/app/classes/RegistredPlayer';
import { Guest } from '@/app/classes/Guest';
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";


let currentPlayer: Player;
let isEverythingLoaded = false;

const guestOrRegistred = (userData: any, socketId: string): Player => {
    let player;
    if (userData) {
        player = new RegistredPlayer(
            userData.tokenIdentifier.split('|')[1].toString(),
            userData.nickname,
            userData.xp,
            userData.level,
            userData.rank,
            true
        );
    } else {
        player = new Guest(socketId, true);
    }
    return player;
}

export default function Lobby() {
    const [playerArray, setPlayerArray] = useState<Player[]>([]);
    const [chatMessages, setChatMessages] = useState<{ sender: Player, msg: string }[]>([]);
    const [socket, setSocket] = useState<Socket | null>(null);
    const { isLoaded } = useUser();
    const userData = useQuery(api.users.readUserByToken);

    useEffect(() => {
        if (isLoaded) {
            // Create a new WebSocket connection
            const newSocket = io('http://localhost:3001/user');

            // Event listener for connection establishment
            newSocket.on('connect', () => {

                // If the user is signed in, it creates a RegistredPlayer object
                // from the fetched data from the database and returns with it.
                // If the user is not signed in, it creates and returns with a Guest object.
                currentPlayer = guestOrRegistred(userData, newSocket.id);

                // Emit a 'player-joined' event and the currentPlayer: Player /Guest or RegistredPlayer/
                // object to the WebSocket server.
                newSocket.emit('player-joined', currentPlayer);
            });

            // Event listener for receiving player list from the ws server
            newSocket.on('player-list', (playerArr: Player[]) => {
                setPlayerArray(playerArr);
            });

            // Event listener for receiving chat messages from the ws server
            newSocket.on('lobby-chat', (sender: Player, msg: string) => {
                setChatMessages((prevMessages) => [{ sender: sender, msg: msg }, ...prevMessages]);
            });

            isEverythingLoaded = true;
            setSocket(newSocket);

            // Cleanup function to disconnect the socket on component unmount
            return () => {
                if (newSocket) {
                    newSocket.disconnect();
                }
            };
        }
    }, [isLoaded, userData])

    // Emit a 'lobby-chat' event and the currentPlayer/ the sender/: Player/ Guest or RegistredPlayer/
    // object and the message to the WebSocket server.
    const sendMessage = (message: string) => {
        if (socket) {
            socket.emit('lobby-chat', currentPlayer, message);
        }
    };

    if (isEverythingLoaded) {
        return (
            <div className={styles.container}>
                <div className={styles.lobby}>
                    <Chat chatMessages={chatMessages} sendMessage={sendMessage} >
                    </Chat>
                    <PlayerList playerArr={playerArray}></PlayerList>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.loading}>
                <div>Loading...</div>
            </div>
        )
    }
}