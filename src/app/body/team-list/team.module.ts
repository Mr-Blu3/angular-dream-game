import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeamRouting} from "./team.routing";
import {TeamListComponent} from "./team-list.component";

@NgModule({
  imports: [
    CommonModule,
    TeamRouting
  ],
  declarations: [
    TeamListComponent
  ]
})
export class TeamModule { }
