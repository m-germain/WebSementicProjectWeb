import {Component, Input, OnInit} from '@angular/core';
import {InfoRecipe} from "../../models/info-recipe";
import {Router} from "@angular/router";

@Component({
  selector: 'Khooky-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  infoRecette: InfoRecipe;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.infoRecette);
  }
}
