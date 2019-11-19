import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServicesService} from "../services.service";
import {Recipe} from "../../models/recipe";

@Component({
  selector: 'Khooky-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})
export class RecetteComponent implements OnInit {

  recette: Recipe;
  constructor(private route: ActivatedRoute, private serveur: ServicesService) { }

  ngOnInit() {
    this.serveur.getRecette(this.route.snapshot.paramMap.get('name').toString()).subscribe(
        recette => { this.recette = recette;
                     console.log(recette)}
    );
  }

  getUrl() {
    return 'url(\'' + this.recette.imgUrl + '\')';
  }
}
