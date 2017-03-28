import {NgModule} from '@angular/core';
import {RestApiService} from "./restApi.service";
import {CommonModule} from '@angular/common';
import {PipeModule} from "../pipes/pipe.module";
import {AppProfileComponent} from "./components/app-profile/app-profile.component";
import {Ng2PaginationModule} from 'ng2-pagination';
import {GrowlModule} from 'primeng/primeng';

@NgModule({
  exports: [
    AppProfileComponent,
    PipeModule,
    Ng2PaginationModule,
    GrowlModule
  ],
  imports: [
    CommonModule,
    PipeModule,GrowlModule
  ],
  providers: [RestApiService],
  declarations: [AppProfileComponent]
})
export class sharedModule { }
