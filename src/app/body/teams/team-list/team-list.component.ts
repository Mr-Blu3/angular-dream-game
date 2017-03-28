import { Component, OnInit } from '@angular/core';
import {TeamClass} from "../../../shared/teams/classes/teams";
import {RestApiService} from "../../../shared/restApi.service";
import {TeamInterface} from "../../../shared/teams/interfaces/teams";
import {Message} from "primeng/components/common/api";

@Component({
  selector: 'team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  private listOfTeams: TeamClass;
  private teamProfile: TeamInterface;
  private msgs: Message[] = [];

  constructor(private restApiService: RestApiService) {}

  ngOnInit() {
    this.listOfTeams = this.restApiService.getListOfTeam();
  }

  getProfile(team: TeamInterface): void {
    this.teamProfile = team;
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Selected:', detail: `Team Name: ${team.teamName}`});
  }
}
