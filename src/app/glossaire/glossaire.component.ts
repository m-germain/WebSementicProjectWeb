import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServicesService} from "../services.service";

@Component({
  selector: 'Khooky-glossaire',
  templateUrl: './glossaire.component.html',
    styleUrls: ['./glossaire.component.scss']
})
export class GlossaireComponent implements OnInit {
    ingredient;
    infosIngredient;
    constructor(private route: ActivatedRoute, private serveur: ServicesService) { }

    ngOnInit() {
        this.ingredient = this.route.snapshot.paramMap.get('ingredient').toString();
        this.serveur.getInfosIngredient(this.ingredient).subscribe(
            infosIngredient => { this.infosIngredient = infosIngredient; }
        );
    }

    getUrl() {
        return 'url(\'' + this.infosIngredient.img + '\')';
    }
}
