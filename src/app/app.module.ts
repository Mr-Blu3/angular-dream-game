import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from './app.component';
import {BodyModule} from "./body/body.module";
import {BodyComponent} from "./body/body.component";
import {AppRouting} from "./app.routing";
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderModule} from "./header/header.module";
import {FooterModule} from "./footer/footer.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {sharedModule} from "./shared/shared.module";
import {JsonpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    sharedModule,
    AppRouting,
    BrowserModule,
    FormsModule,
    BodyModule,
    HeaderModule,
    FooterModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
