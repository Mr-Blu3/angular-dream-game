import { NgModule } from '@angular/core';
import {RegisterRouting} from "./register.routing";
import {CommonModule} from "@angular/common";
import {RegisterComponent} from "./register-list/register.component";
import {sharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    RegisterRouting,
    sharedModule
  ],
  declarations: [
    RegisterComponent
  ]
})
export class RegisterModule {}
