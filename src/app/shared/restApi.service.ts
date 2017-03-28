import { Injectable } from '@angular/core';
import {PlayerClass} from'./players/classes/players'
import {TeamClass} from "./teams/classes/teams";
import {MOCK_PLAYERS} from "./players/mock-data/mock-players";
import {MOCK_TEAMS} from "./teams/mock-data/mock-teams";

@Injectable()
export class RestApiService {

  getListOfPlayers(): PlayerClass {
    return MOCK_PLAYERS;
  }

  getListOfTeam(): TeamClass {
    return MOCK_TEAMS;
  }

}
