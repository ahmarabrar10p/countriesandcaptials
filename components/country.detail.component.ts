import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Country } from '../models/country.js';
import { CountriesService } from '../services/countries.service.js';

@Component({
    selector: 'my-country',
    templateUrl: '../views/countryDetail.html'
})
export class CountriesDetailComponent implements OnInit{
    country: Country;
    captial: Country;
    neighbours: Country[];
    code: string;
    private sub: any;

    constructor(private route: ActivatedRoute, private countriesService: CountriesService){}

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {this.code = params['id']});
        this.countriesService.getCountry(this.code)            
            .then(country => {
                this.country = country;

                this.countriesService.getCountryCapital(country.countryCode, country.capital)
                    .then(c => this.captial = c);

                this.countriesService.getCountryNeighbours(country.geonameId)
                    .then(n => this.neighbours = n.slice(0, 3));
            })
    }

    private ngOnDestroy() {
        this.sub.unsubscribe();
    }
}   