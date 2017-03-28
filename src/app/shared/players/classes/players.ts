import {PlayerInterface} from '../interfaces/players';

export class PlayerClass {
  players: PlayerInterface[];

  constructor(players: PlayerInterface[]) {
    this.players = players;
  }
}
