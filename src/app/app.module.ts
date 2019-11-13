import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecetteComponent } from './recette/recette.component';
import {NavbarModule, WavesModule, ButtonsModule, IconsModule} from 'angular-bootstrap-md';
import {NavbarComponent} from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecetteComponent,
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    IconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
