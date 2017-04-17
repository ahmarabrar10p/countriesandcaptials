"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const dashbroad_component_js_1 = require("./components/dashbroad.component.js");
const countries_component_js_1 = require("./components/countries.component.js");
const country_detail_component_js_1 = require("./components/country.detail.component.js");
const routes = [
    { path: '', redirectTo: '/dashbroad', pathMatch: 'full' },
    { path: '', redirectTo: '/countries', pathMatch: 'full' },
    { path: '', redirectTo: '/countryDetail', pathMatch: 'full' },
    { path: 'dashbroad', component: dashbroad_component_js_1.DashbroadComponent },
    { path: 'countries', component: countries_component_js_1.CountriesComponent },
    { path: 'countryDetail/:id', component: country_detail_component_js_1.CountriesDetailComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map