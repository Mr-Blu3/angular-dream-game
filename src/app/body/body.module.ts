import {NgModule} from '@angular/core';
import {TeamModule} from "./teams/team.module";
import {PlayerModule} from "./players/player.module";
import {ErrorModule} from "./errors/error.module";
import {RegisterModule} from "./register/register.module";

@NgModule({
  imports: [
    TeamModule,
    PlayerModule,
    ErrorModule,
    RegisterModule
  ],
  declarations: []
})
export class BodyModule { }
