  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

 Url = 'https://coronavirus-19-api.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getGlobalData() {
    return this.http.get(this.Url+'all');
  }

   getCountriesData() {
     return this.http.get(this.Url+'countries');
   }

   getParticularCountryDetail(country){
     return this.http.get(this.Url+'countries/'+country)
   }
}