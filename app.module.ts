import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module.js';

import { AppComponent }         from './components/app.component.js';
import { CountriesComponent } from './components/countries.component.js';
import { DashbroadComponent } from './components/dashbroad.component.js';
import { CountriesDetailComponent } from './components/country.detail.component.js';
import { CountriesService } from './services/countries.service.js';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashbroadComponent,
    CountriesComponent,
    CountriesDetailComponent
  ],
  providers: [ CountriesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
