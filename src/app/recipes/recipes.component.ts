import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './Recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
recipes: Recipe[] =  [
  {name: 'PalakPaneer', description: 'palak Paneer dish', image: 'assets/palakpaneer.jpg'},
  {name: 'Rajma', description: 'Rajma  dish', image: 'assets/rajma.jpg'},
  {name: 'Matar Aalo ', description: 'matar Aalo dish', image: 'assets/rajma.jpg'}
];
@Output() clickedRecipe = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService) {
   // this.recipes = this.recipeService.getRecipes();
  }

  ngOnInit(): void {
  }
  onRecipeClicked(recipe: Recipe){
    //this.clickedRecipe.emit(recipe);
    this.recipeService.setClickedRecipe(recipe);
  }

}
