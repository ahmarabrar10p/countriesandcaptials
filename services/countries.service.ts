import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Country } from '../models/country';

@Injectable()
export class CountriesService{

    private headers = new Headers({'Content-Types': 'application/json'});
    private countriesUrl = 'http://api.geonames.org/countryInfoJSON?username=ahmarabrar10p';
      
    constructor(private http: Http){ }

    getCountries(): Promise<Country[]>{
        return this.http.get(this.countriesUrl)
                    .toPromise()
                    .then(response => response.json().geonames as Country[])
                    .catch(this.handleError);
    }

    getCountry(code: string): Promise<Country>{
        return this.http.get(this.countriesUrl)
                    .toPromise()
                    .then(function(response){
                        var countries = response.json().geonames as Country[];
                        var country = countries.find(c => c.countryCode == code);

                        return country;
                    })
                    .catch(this.handleError);
    }

    getCountryCapital(countryCode: string, captial: string): Promise<Country>{
        return this.http.get(`http://api.geonames.org/searchJSON?q=${captial}&country=${countryCode}&maxRows=10&username=ahmarabrar10p`)
                    .toPromise()
                    .then(response => { 
                        var result = response.json().geonames as Country[];
                        return result[0];
                    })
                    .catch(this.handleError);

    }

    getCountryNeighbours(geonameId: number){
        return this.http.get(`http://api.geonames.org/neighboursJSON?geonameId=${geonameId}&username=ahmarabrar10p`)
                    .toPromise()
                    .then(response => response.json().geonames as Country[])
                    .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}