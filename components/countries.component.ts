import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Country } from '../models/country.js';
import { CountriesService } from '../services/countries.service.js';

@Component({
    selector: 'my-countries',
    templateUrl: '../views/countries.html'
})
export class CountriesComponent implements OnInit{
    countries: Country[] = [];

    constructor(private countriesService: CountriesService){}

    ngOnInit(): void{
        this.countriesService.getCountries()            
            .then(countries => this.countries = countries);
    }
}