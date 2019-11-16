import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'Khooky-glossaire',
  templateUrl: './glossaire.component.html',
    styleUrls: ['./glossaire.component.scss']
})
export class GlossaireComponent implements OnInit {
    ingredient;
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.ingredient = this.route.snapshot.paramMap.get('ingredient').toString();
    }
}
