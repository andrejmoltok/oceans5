import { io, Socket } from 'socket.io-client';

const socket = io('http://localhost:3001');

export { socket };