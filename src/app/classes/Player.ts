export abstract class Player {
    abstract playerId: string;
    abstract playerName: string;
    online: boolean = true;
    status: boolean = true;
}