import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageNotFoundComponent} from "./page/not/found/page-not-found.component";
import {ErrorRouting} from "./error.routing";

@NgModule({
  imports: [
    CommonModule,
    ErrorRouting
  ],
  declarations: [PageNotFoundComponent]
})
export class ErrorModule { }
