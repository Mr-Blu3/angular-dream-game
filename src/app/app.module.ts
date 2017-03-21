import {NgModule} from "@angular/core";
import {FormsModule} from '@angular/forms';
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from './app.component';
import {BodyModule} from "./body/body.module";
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BodyComponent} from "./body/body.component";
import {AppRouting} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    FormsModule,
    BodyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
