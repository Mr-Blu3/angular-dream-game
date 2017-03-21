import {NgModule}from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TeamListComponent} from "./team-list.component";

const routes: Routes = [
  {path: 'team-list', component: TeamListComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class TeamRouting {}
