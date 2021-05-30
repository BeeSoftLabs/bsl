import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { PDirective } from './p.directive';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    PDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PadreComponent]
})
export class AppModule { }
