import { NgModule } from '@angular/core';
import {PlayersListComponent} from "./player-list/players-list.component";
import {PlayerRouting} from "./player.routing";
import {CommonModule} from "@angular/common";
import {sharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    PlayerRouting,
    CommonModule,
    sharedModule,
    FormsModule
  ],
  declarations: [
    PlayersListComponent
  ]
})
export class PlayerModule { }
