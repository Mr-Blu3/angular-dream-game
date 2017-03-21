import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamModule} from "./team-list/team.module";
import {PlayerModule} from "./players-list/team.module";
import {ErrorModule} from "./errors/error.module";

@NgModule({
  imports: [
    CommonModule,
    TeamModule,
    PlayerModule,
    ErrorModule
  ],
  declarations: []
})
export class BodyModule { }
