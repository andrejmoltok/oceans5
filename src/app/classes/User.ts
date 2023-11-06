import { Player } from "./Player";

export class User extends Player{
    playerId: string;
    playerName: string;
    userID: any;
    userName: string; 
    gamesWon: number;
    gamesLost: number;
    gamesPlayed: number;
    
    constructor(
        userID: any,
        userName: string,
        gamesWon?: number,
        gamesLost?: number,
        online?: true
    ) 
    {
        super(online);
        this.userID = userID;
        this.userName = userName;
        this.playerId = userID;
        this.playerName = userName;
        this.gamesWon = gamesWon || 0;
        this.gamesLost = gamesLost || 0;
        this.gamesPlayed = (this.gamesWon + this.gamesLost) || 0;
    }

    setPlayerId(): string {
        return this.userID;        
    }

    setPlayerName(): string {
        return this.userName;
    }

    public winRatio() {
        if (this.gamesPlayed === 0) {
            return 0;
        }
        return (this.gamesWon / this.gamesPlayed).toFixed(2);
    }

    public loseRatio() {
        if (this.gamesPlayed === 0) {
            return 0;
        }
        return (this.gamesLost / this.gamesPlayed).toFixed(2);
    }
}