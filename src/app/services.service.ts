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

  getRecetteList(search): Observable<any> {
    // Initialize Params Object
    //let params = new HttpParams();
    // Begin assigning parameters
    //params = params.append('firstParameter', parameters.valueOne);
    //params = params.append('secondParameter', parameters.valueTwo);

    //ERROR ICI
    let params = new HttpParams();
    if (search.searchBar.toString() !== '') {
      params = params.append('keywords', search.searchBar.toString());
    }
    if (search.ingredient.toString() !== '') {
      params = params.append('ingredients', search.ingredient.toString());
    }
    if (search.cuisine.toString() !== '') {
      params = params.append('typeCuisine', search.cuisine.toString());
    }
    if (search.note.toString() !== '') {
      params = params.append('note', search.note.toString());
    }
    if (search.tempDePrep.toString() !== '') {
      params = params.append('tempDePrep', search.tempDePrep.toString());
    }
    return this.httpClient.get(this.API_URL + 'listRecette', {params: params});
  }

  getRecette(name): Observable<Recipe> {
    return this.httpClient.get<Recipe>(this.API_URL + 'recette', {params: {name: name.toString()}});
  }

  getInfosIngredient(ingredient): Observable<any> {
    return this.httpClient.get(this.API_URL + 'infosingredients', {params: {ingredient: ingredient.toString()}});
  }
}
