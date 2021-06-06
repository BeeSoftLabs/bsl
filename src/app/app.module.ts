import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjemplosHooksComponent } from './ejemplos-hooks/ejemplos-hooks.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemplosHooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
