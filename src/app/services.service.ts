import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  API_URL: string = '127.0.0.1:5000/';

  constructor(private httpClient: HttpClient) { }

  getHelloWorld() {
    return this.httpClient.get(this.API_URL);
  }

  getRecetteList(parameters): Observable<any>{
    // Initialize Params Object
    let params = new HttpParams();
    // Begin assigning parameters
    params = params.append('firstParameter', parameters.valueOne);
    params = params.append('secondParameter', parameters.valueTwo);

    return this.httpClient.get(this.API_URL + 'recette', {params: params});
  }
}
