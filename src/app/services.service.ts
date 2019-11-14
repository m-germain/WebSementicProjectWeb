import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  API_URL: string = '127.0.0.1:5000/';

  constructor(private httpClient: HttpClient) { }

  getHelloWorld() {
    return this.httpClient.get(this.API_URL);
  }

  getRecetteList() {
    return this.httpClient.get(this.API_URL + 'recette');
  }

}
