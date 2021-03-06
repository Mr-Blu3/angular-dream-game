import { NgModule } from '@angular/core';
import {TeamRouting} from "./team.routing";
import {CommonModule} from "@angular/common";
import {TeamListComponent} from "./team-list/team-list.component";
import {sharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    TeamRouting,
    sharedModule
  ],
  declarations: [
    TeamListComponent
  ]
})
export class TeamModule {}
