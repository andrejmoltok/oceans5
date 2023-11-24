import { Player } from "./Player";

export class RegistredPlayer extends Player {
    playerId: string;
    playerName: string;
    picture: string;
    updated_at: string;
    gamesPlayed: number;
    gamesWon: number;
    gamesLost: number;
    winRatio: number;
    loseRatio: number;
    xp: number;
    level: number;
    rank: string;
    avgScore: number;
    totalPoints: number;
    accuracyRatio: number;
    playtimeTotal: string;

    constructor(playerId: string, publicData: any) {
        super();
        this.playerId = playerId;
        this.playerName = publicData.nickname!;
        this.picture = publicData.picture!;
        this.updated_at = publicData.updated_at!;
        this.gamesPlayed = publicData.gamesPlayed!;
        this.gamesWon = publicData.gamesWon!;
        this.gamesLost = publicData.gamesLost!;
        this.winRatio = publicData.winRatio!;
        this.loseRatio = publicData.loseRatio!;
        this.xp = publicData.xp!;
        this.level = publicData.level!;
        this.rank = publicData.rank!;
        this.avgScore = publicData.avgScore!;
        this.totalPoints = publicData.totalPoints!;
        this.accuracyRatio = publicData.accuracyRatio!;
        this.playtimeTotal = publicData.playtimeTotal!;
        // this.online = true;
        // this.status = true;
    }

    static createPlayer(publicData: any, playerId: string): RegistredPlayer {
        return new RegistredPlayer(publicData, playerId);
    }
}