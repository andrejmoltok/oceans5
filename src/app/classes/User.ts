export class User {
    // users' unique ID
    userID: any;
    // username
    userName: string;
    // online/offline status
    online: boolean;
    // status: if available for play or already playing
    status: string;
    // number of games the user has won
    gamesWon: number;
    // number of games the user has lost
    gamesLost: number;
    // total number of games won and lost
    gamesPlayed: number;

    constructor(
        userID: any, 
        userName: string, 
        online: boolean,
        status?: string | "",
        gamesWon?: number,
        gamesLost?: number,
        gamesPlayed?: number
        ) {
        this.userID = userID;
        this.userName = userName;
        this.online = online;
        this.status = this.online === true ? "Available" : "Not available";
        this.gamesWon = gamesWon || 0;
        this.gamesLost = gamesLost || 0;
        this.gamesPlayed = (this.gamesWon + this.gamesLost) || 0;
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