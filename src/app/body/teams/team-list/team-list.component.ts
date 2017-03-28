import { Component, OnInit } from '@angular/core';
import {TeamClass} from "../../../shared/teams/classes/teams";
import {RestApiService} from "../../../shared/services/restApi.service";
import {TeamInterface} from "../../../shared/teams/interfaces/teams";
import {Message} from "primeng/components/common/api";
import {ProfileService} from "../../../shared/services/profile.service";

@Component({
  selector: 'team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  private listOfTeams: TeamClass;
  private teamProfile: TeamInterface;
  private msgs: Message[] = [];

  private saveShow: TeamInterface;

  constructor(private restApiService: RestApiService, private profileService: ProfileService) {}

  ngOnInit() {
    this.listOfTeams = this.restApiService.getListOfTeam();
  }

  getProfile(team: TeamInterface): void
  {
    if(this.saveShow)return;
    this.teamProfile = team;
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Selected:', detail: `Team Name: ${team.teamName}`});
  }

  editProfile(team: TeamInterface)
  {
    this.teamProfile = undefined;
    this.msgs = [];
    this.msgs.push({severity:'warn', summary:'Selected:', detail: `Edit Profile: ${team.teamName}`});
    this.saveShow = team;
  }

  saveProfile()
  {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Selected:', detail: `Saved Profile`});
    this.saveShow = undefined;
  }
}
