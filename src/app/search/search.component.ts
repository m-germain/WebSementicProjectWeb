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

  isCollapsed = false;
  listRecettes: InfoRecipe[];
  mouseOverSearch: false;

  constructor(private serveur: ServicesService) { }

  ngOnInit() {
    this.listRecettes = new Array<InfoRecipe>();
  }

  search() {
    this.serveur.getRecetteList().subscribe( json => json.list_recette.map(recette => this.listRecettes.push(recette) ));
  }
}
