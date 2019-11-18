import { Component, OnInit } from '@angular/core';
import {InfoRecipe} from '../../models/info-recipe';
import {ServicesService} from '../services.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'Khooky-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  isSubmited = false;
  isCollapsed = true;
  listRecettes: InfoRecipe[];
  mouseOverSearch: false;
  inputValue;

  constructor(private serveur: ServicesService) { }

  ngOnInit() {
    this.listRecettes = new Array<InfoRecipe>();
  }

  search(input) {
    this.inputValue = input;
    // reset list
    this.listRecettes = new Array<InfoRecipe>();
    this.serveur.getRecetteList(this.inputValue).subscribe(
        json => { json.list_recette.map(recette => this.listRecettes.push(recette)),
            this.isSubmited = true; });
  }
}
