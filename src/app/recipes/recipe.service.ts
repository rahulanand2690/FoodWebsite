import { Injectable } from '@angular/core';
import { Recipe } from './Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

recipes: Recipe[] =  [
  {name: 'PalakPaneer', description: 'palak Paneer dish', image: 'assets/palakpaneer.jpg'},
  {name: 'Rajma', description: 'Rajma  dish', image: 'assets/rajma.jpg'},
  {name: 'matar Aalo dish', description: 'matar Aalo dish', image: 'assets/rajma.jpg'}
];

clickedRecipe: Recipe;
  constructor() { }
  getRecipes(): Recipe[] {
    return this.recipes;
  }

  setClickedRecipe(recipe: Recipe) {
    this.clickedRecipe = recipe;
  }
  getClickedRecipe(){
    return this.clickedRecipe;
  }

}
