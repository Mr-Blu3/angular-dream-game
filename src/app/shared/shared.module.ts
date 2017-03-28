import {NgModule} from '@angular/core';
import {RestApiService} from "./services/restApi.service";
import {CommonModule} from '@angular/common';
import {PipeModule} from "../pipes/pipe.module";
import {AppProfileComponent} from "./components/app-profile/app-profile.component";
import {Ng2PaginationModule} from 'ng2-pagination';
import {GrowlModule} from 'primeng/primeng';
import {ProfileService} from "./services/profile.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  exports: [
    AppProfileComponent,
    PipeModule,
    Ng2PaginationModule,
    GrowlModule,
    FormsModule
  ],
  imports: [
    CommonModule,
    PipeModule,GrowlModule
  ],
  providers: [RestApiService, ProfileService],
  declarations: [AppProfileComponent]
})
export class sharedModule { }
