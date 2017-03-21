import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlayersListComponent} from "./players-list.component";
import {PlayerRouting} from "./team.routing";

@NgModule({
  imports: [
    CommonModule,
    PlayerRouting
  ],
  declarations: [
    PlayersListComponent
  ]
})
export class PlayerModule { }
