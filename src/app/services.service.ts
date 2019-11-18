import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InfoRecipe} from "../models/info-recipe";
import {Recipe} from "../models/recipe";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

   API_URL: string =  'http://127.0.0.1:5000/';

  constructor(private httpClient: HttpClient) { }

  getHelloWorld() {
    return this.httpClient.get(this.API_URL);
  }

  getRecetteList(keywords): Observable<any> {
    // Initialize Params Object
    //let params = new HttpParams();
    // Begin assigning parameters
    //params = params.append('firstParameter', parameters.valueOne);
    //params = params.append('secondParameter', parameters.valueTwo);

    return this.httpClient.get(this.API_URL + 'listRecette', {params: {keywords: keywords.toString()}});
  }

  getRecette(name): Observable<Recipe> {
    return this.httpClient.get<Recipe>(this.API_URL + 'recette', {params: {name: name.toString()}});
  }

  getInfosIngredient(ingredient): Observable<any> {
    return this.httpClient.get(this.API_URL + 'infosingredients', {params: {ingredient: ingredient.toString()}});
  }
}
