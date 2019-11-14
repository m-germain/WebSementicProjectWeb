import { Component, OnInit } from '@angular/core';
import {InfoRecipe} from "../../models/info-recipe";

@Component({
  selector: 'Khooky-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  listRecette = new Array<InfoRecipe>();
  infoRecette: InfoRecipe;

  constructor() { }

  ngOnInit() {
    this.infoRecette = new InfoRecipe();
    this.infoRecette.name = 'Riz au Curry';
    this.infoRecette.linkName = 'riz_curry';
    this.infoRecette.cookTime = '20';
    // tslint:disable-next-line:max-line-length
    this.infoRecette.desciption = 'LALALLALALALLALALLALALLALALALALLALALALLALALLALALLALALLALALALL\n\rALALLLALALLALALALLALALLALALLALALLALALALLALALLLLALALALLALALLLALALLALALALLALALLALALLALALLALALALLALALLLALALLALALALLALALLALALLALALLALALALLALALLLALALLALALALLALALLALALLALALLALALALLALALLLALALLALALALLALALLALALLALALLALALALLALALLLALALLALALALLALALLALALLALALLALALALLALALL';
    this.infoRecette.note = '5';
    this.infoRecette.dificulty = 'HARD';
    this.infoRecette.imgUrl = 'https://static.cuisineaz.com/400x320/i126601-poulet-au-curry-et-au-riz.jpeg';
    this.listRecette.push(this.infoRecette);
    this.listRecette.push(this.infoRecette);
    this.listRecette.push(this.infoRecette);
    this.listRecette.push(this.infoRecette);
  }

}
