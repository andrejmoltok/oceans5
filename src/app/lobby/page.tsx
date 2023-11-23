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
        // This is the goal:
        // player = userData.public_data as RegistredPlayer;
        player = new RegistredPlayer(
            userData.tokenIdentifier.split('|')[1].toString(),
            userData.nickname,
        );
    } else {
        player = new Guest(socketId);
    }

    player.online = true;
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
            const newSocket = initSocket();
            
            isEverythingLoaded = true;

            // Cleanup function to disconnect the socket on component unmount
            return () => {
                if (newSocket) {
                    newSocket.disconnect();
                }
            };
        }
    }, [isLoaded, userData]);

    const initSocket = (): Socket<any> => {
        const aSocket = io('http://localhost:3001/user');

        // Event listener for connection establishment
        aSocket.on('connect', () => {

            // If the user is signed in, it creates a RegistredPlayer object
            // from the fetched data from the database and returns with it.
            // If the user is not signed in, it creates and returns with a Guest object.
            currentPlayer = guestOrRegistred(userData, aSocket.id);

            // Emit a 'player-joined' event and the currentPlayer: Player /Guest or RegistredPlayer/
            // object to the WebSocket server.
            aSocket.emit('player-joined', currentPlayer);
        });

        // Event listener for receiving player list from the ws server
        aSocket.on('player-list', (playerArr: Player[]) => {
            setPlayerArray(playerArr);
        });

        // Event listener for receiving chat messages from the ws server
        aSocket.on('lobby-chat', (sender: Player, msg: string) => {
            setChatMessages((prevMessages) => [{ sender: sender, msg: msg }, ...prevMessages]);
        });

        setSocket(aSocket);

        return aSocket;
    }

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