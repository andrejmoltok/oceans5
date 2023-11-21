import { Player } from "./Player";

export class User extends Player {
    playerId: string;
    playerName: string;
    userID: any;
    userName: string;
    gamesWon: number;
    gamesLost: number;
    gamesPlayed: number;
    winRatio: number;
    loseRatio: number;
    xp: number;
    level: number;
    rank: string;
    avgScore: number;
    totalPoints: number;
    accuracyRatio: number;
    playtimeTotal: string;

    constructor(
        userID: any,
        userName: string,
        xp: number,
        level: number,
        rank: string,
        online?: true,
        gamesWon?: number,
        gamesLost?: number,
        gamesPlayed?: number,
        winRatio?: number,
        loseRatio?: number,
        avgScore?: number,
        totalPoints?: number,
        accuracyRatio?: number,
        playtimeTotal?: string,
    ) {
        super(online);
        this.userID = userID;
        this.userName = userName;
        this.playerId = userID;
        this.playerName = userName;
        this.gamesWon = gamesWon || 0;
        this.gamesLost = gamesLost || 0;
        this.gamesPlayed = (this.gamesWon + this.gamesLost) || 0;
        this.winRatio = (this.gamesPlayed > 0 ? +((this.gamesWon / this.gamesPlayed).toFixed(2)) : 0);
        this.loseRatio = (this.gamesPlayed > 0 ? +((this.gamesLost / this.gamesPlayed).toFixed(2)) : 0);
        this.xp = xp;
        this.level = level;
        this.rank = rank;
        this.avgScore = avgScore || 0;
        this.totalPoints = totalPoints || 0;
        this.accuracyRatio = accuracyRatio || 0;
        this.playtimeTotal = playtimeTotal || "";
    }

    setPlayerId(): string {
        return this.userID;
    }

    setPlayerName(): string {
        return this.userName;
    }

}