import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiPaisesService {

  public countriesUrlEurope = 'https://restcountries.com/v2/continent/america';

  constructor(private http: HttpClient) { }

  public getListadoPaises(url: any) {
    return this.http.get(url);
  }

}