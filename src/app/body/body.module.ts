import {NgModule} from '@angular/core';
import {TeamModule} from "./teams/team.module";
import {PlayerModule} from "./players/player.module";
import {ErrorModule} from "./errors/error.module";

@NgModule({
  imports: [
    TeamModule,
    PlayerModule,
    ErrorModule
  ],
  declarations: []
})
export class BodyModule { }
