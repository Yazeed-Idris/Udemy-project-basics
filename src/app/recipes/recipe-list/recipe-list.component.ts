import { EventEmitter } from '@angular/core';
import {Component, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeDetails = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Pizza", "Onions, Sauce, Dough", 'https://hsaa.hsobjects.com/h/restaurants/android_cover_photos/000/000/236/7314305ba5e16faab5cf523bab8aeb72-large.jpg'),
    new Recipe("Burger", "Meat, Bread, Mayo", "https://www.google.com/search?q=burger+image&rlz=1C1GCEU_enSA954SA954&sxsrf=ALeKk02y2W-L2SRBfvOetU9zCwuZFo6N5g:1625398839272&tbm=isch&source=iu&ictx=1&fir=2HCt1WbwSQ5bWM%252CeJltgwpJmsWElM%252C_&vet=1&usg=AI4_-kQ4FTH15BFsL2Bxn8r2msEIAXz38w&sa=X&ved=2ahUKEwiwgLvDqsnxAhWQDxQKHX5kC-EQ9QF6BAgSEAE#imgrc=2HCt1WbwSQ5bWM")
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  showDetails($event: Recipe) {
    this.recipeDetails.emit($event);
  }
}
