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
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
let CountriesService = class CountriesService {
    constructor(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Types': 'application/json' });
        this.countriesUrl = 'http://api.geonames.org/countryInfoJSON?username=ahmarabrar10p';
    }
    getCountries() {
        return this.http.get(this.countriesUrl)
            .toPromise()
            .then(response => response.json().geonames)
            .catch(this.handleError);
    }
    getCountry(code) {
        return this.http.get(this.countriesUrl)
            .toPromise()
            .then(function (response) {
            var countries = response.json().geonames;
            var country = countries.find(c => c.countryCode == code);
            return country;
        })
            .catch(this.handleError);
    }
    getCountryCapital(countryCode, captial) {
        return this.http.get(`http://api.geonames.org/searchJSON?q=${captial}&country=${countryCode}&maxRows=10&username=ahmarabrar10p`)
            .toPromise()
            .then(response => {
            var result = response.json().geonames;
            return result[0];
        })
            .catch(this.handleError);
    }
    getCountryNeighbours(geonameId) {
        return this.http.get(`http://api.geonames.org/neighboursJSON?geonameId=${geonameId}&username=ahmarabrar10p`)
            .toPromise()
            .then(response => response.json().geonames)
            .catch(this.handleError);
    }
    handleError(error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
};
CountriesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CountriesService);
exports.CountriesService = CountriesService;
//# sourceMappingURL=countries.service.js.map