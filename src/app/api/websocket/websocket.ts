import { Server } from 'socket.io';

export default (req: any, res: any) => {
  if (!res.socket.server.io) {
    console.log('Szerver indítása');
    const io = new Server(res.socket.server);

    io.on('connection', (socket) => {
      console.log('A kliens csatlakozott');
      
      socket.on('message', (data) => {
        console.log('Kapott üzenet:', data);
        io.emit('message', data); // Küldje az üzenetet az összes kliensnek
      });

      socket.on('disconnect', () => {
        console.log('A kliens kilépett');
      });
    });
    res.socket.server.io = io;
  }
};