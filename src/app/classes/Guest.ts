import { Player } from "./Player";

export class Guest extends Player{
    playerId: string;
    playerName: string;

    constructor(playerId: string, online?: boolean) {
        super(online);
        this.playerId = playerId;
        this.playerName = 'Vendég#' + playerId.slice(0, 5);
    }
}