import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RecetteComponent } from './recette/recette.component';
import { CardComponent } from './card/card.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import {LoadingScreenInterceptor} from './loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavBarComponent,
    RecetteComponent,
    CardComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
      {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingScreenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
