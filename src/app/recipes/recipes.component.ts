import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeDetails;

  constructor() { }

  ngOnInit(): void {
  }

  inputToDetails($event: Recipe) {
    this.recipeDetails = $event;
  }
}
