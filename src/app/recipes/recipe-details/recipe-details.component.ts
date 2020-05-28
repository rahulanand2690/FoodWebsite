import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipeElement: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
