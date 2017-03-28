import {TeamInterface} from '../interfaces/teams';

export class TeamClass {
  teams: TeamInterface[];

  constructor(teams: TeamInterface[]) {
    this.teams = teams;
  }
}
