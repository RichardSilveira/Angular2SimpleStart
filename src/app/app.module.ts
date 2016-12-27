import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AUTH_CONFIG, PjmtAuthModule} from '@pjmt/auth';

import {AppComponent} from './app.component';
import {environment} from "../environments/environment";
import {AppRoutingModule} from "./app.routing";
import {HomeModule} from "./home/home.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PjmtAuthModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [
    {provide: AUTH_CONFIG, useValue: environment.authentication}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
