import {NgModule}from '@angular/core';
import {PreloadAllModules , RouterModule, Routes} from '@angular/router';
import {PlayersListComponent} from "./body/players/player-list/players-list.component";

const routes: Routes = [
  {path: 'teams', loadChildren: 'app/body/teams/team.module#TeamModule'},
  {path: 'players', loadChildren: 'app/body/players/player.module#PlayerModule'},
  {path: 'register/team', loadChildren: 'app/body/register/register.module#RegisterModule'},
  {path: 'register/player', loadChildren: 'app/body/register/register.module#RegisterModule'},
  {path: '', component: PlayersListComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [ RouterModule ]
})
export class AppRouting {}

