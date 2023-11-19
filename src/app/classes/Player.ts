export abstract class Player {
    abstract playerId: string;
    abstract playerName: string;
    online?: boolean;
    status?: string;

    constructor(online?: boolean) {
        this.online = online;
        this.status = this.online ? "Available" : "Not available";
    }
}