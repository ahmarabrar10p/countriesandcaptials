import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashbroadComponent } from './components/dashbroad.component.js';
import { CountriesComponent } from './components/countries.component.js';
import { CountriesDetailComponent } from './components/country.detail.component.js';

const routes: Routes = [
  { path: '', redirectTo: '/dashbroad', pathMatch: 'full'},
  { path: '', redirectTo: '/countries', pathMatch: 'full' },
  { path: '', redirectTo: '/countryDetail', pathMatch: 'full' },
  { path: 'dashbroad',  component: DashbroadComponent },
  { path: 'countries',  component: CountriesComponent },
  { path: 'countryDetail/:id',  component: CountriesDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
