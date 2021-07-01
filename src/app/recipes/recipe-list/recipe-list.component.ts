import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Pizza", "Onions, Sauce, Dough", 'https://hsaa.hsobjects.com/h/restaurants/android_cover_photos/000/000/236/7314305ba5e16faab5cf523bab8aeb72-large.jpg')
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
