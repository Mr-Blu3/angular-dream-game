import { NgModule } from '@angular/core';
import {TeamRouting} from "./team.routing";
import {CommonModule} from "@angular/common";
import {TeamListComponent} from "./team-list/team-list.component";
import {PipeModule} from "../../pipes/pipe.module";
import {AppProfileComponent} from "../../shared/components/app-profile/app-profile.component";
import {sharedModule} from "../../shared/shared.module";
import {BodyModule} from "../body.module";

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
