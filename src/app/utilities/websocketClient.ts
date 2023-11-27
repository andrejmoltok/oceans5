import { io, Socket } from 'socket.io-client';

const socket = io('http://localhost:3001');
// const gameSocket = io('http://localhost:3002');

export { socket };