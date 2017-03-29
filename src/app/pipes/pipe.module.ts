import {NgModule} from "@angular/core";
import {KeyPipe} from "./key.pipe";
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [KeyPipe, SearchPipe],
  exports:  [KeyPipe, SearchPipe]
})

export class PipeModule {}
