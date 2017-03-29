import {Component, OnInit} from '@angular/core';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

import {PlayerClass} from '../../../shared/players/classes/players';
import {RestApiService} from "../../../shared/services/restApi.service";
import {Message} from "primeng/components/common/api";
import {PlayerInterface} from "../../../shared/players/interfaces/players";

@Component({
  selector: 'players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss'],
  providers: [NgbPaginationConfig],
})
export class PlayersListComponent implements OnInit {

  private listOfPlayers: PlayerClass;
  private playerProfile: PlayerInterface;
  private msgs: Message[] = [];
  private terms = "";

  constructor(private restApiService: RestApiService, config: NgbPaginationConfig) {
    config.size = 'lg';
    config.boundaryLinks = true;
  }

  ngOnInit() {
    this.listOfPlayers = this.restApiService.getListOfPlayers();
  }

  getProfile(player: PlayerInterface): void {
    this.playerProfile = player;
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Selected:', detail: `First Name: ${player.firstName}<br> Last Name: ${player.lastName}`});
  }

  searchBox(search: string)
  {
    this.terms = search;
  }
}

