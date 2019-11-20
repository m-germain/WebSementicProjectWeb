import { Component, OnInit } from '@angular/core';
import {InfoRecipe} from '../../models/info-recipe';
import {ServicesService} from '../services.service';
import {FormControl, FormGroup} from "@angular/forms";
import {error} from "util";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'Khooky-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm = new FormGroup({
    searchBar: new FormControl(''),
    ingredient: new FormControl(''),
    cuisine: new FormControl(''),
    note: new FormControl(''),
    tempDePrep : new FormControl(''),
  });

  isSubmited = false;
  isCollapsed = true;
  listRecettes: InfoRecipe[];
  mouseOverSearch: false;
  inputValue;
  checkIngredient: boolean;

  constructor(private serveur: ServicesService) { }

  ngOnInit() {
    this.listRecettes = new Array<InfoRecipe>();
  }

  search() {
    console.log(this.searchForm.value);
    // reset list
    this.listRecettes = new Array<InfoRecipe>();
    this.serveur.getRecetteList(this.searchForm.value).subscribe(
        json => { json.list_recette.map(recette => this.listRecettes.push(recette)),
            this.isSubmited = true; },
        error1 => console.log(error1)
            );
  }

}
