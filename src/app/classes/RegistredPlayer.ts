import { Player } from "./Player";

export class RegistredPlayer extends Player {
    playerId: string;
    playerName: string;
    picture: string = "";
    updated_at: string = "";
    gamesWon: number = 0;
    gamesLost: number = 0;
    gamePlayed: number = 0;
    winRatio: number = 0;
    loseRatio: number = 0;
    xp: number = 0;
    level: number = 1;
    rank: string = "Seaman";
    avgScore: number = 0;
    totalPoints: number = 0;
    accuracyRatio: number = 0;
    playtimeTotal: string = "0";

    constructor(
        playerId: string,
        playerName: string,
    ) {
        super();
        this.playerId = playerId;
        this.playerName = playerName;
    }
}