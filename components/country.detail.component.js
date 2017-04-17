"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const countries_service_js_1 = require("../services/countries.service.js");
let CountriesDetailComponent = class CountriesDetailComponent {
    constructor(route, countriesService) {
        this.route = route;
        this.countriesService = countriesService;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => { this.code = params['id']; });
        this.countriesService.getCountry(this.code)
            .then(country => {
            this.country = country;
            this.countriesService.getCountryCapital(country.countryCode, country.capital)
                .then(c => this.captial = c);
            this.countriesService.getCountryNeighbours(country.geonameId)
                .then(n => this.neighbours = n.slice(0, 3));
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
CountriesDetailComponent = __decorate([
    core_1.Component({
        selector: 'my-country',
        templateUrl: '../views/countryDetail.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, countries_service_js_1.CountriesService])
], CountriesDetailComponent);
exports.CountriesDetailComponent = CountriesDetailComponent;
//# sourceMappingURL=country.detail.component.js.map