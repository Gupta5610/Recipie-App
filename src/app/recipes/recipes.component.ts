import { Component, OnInit } from '@angular/core';
import { Recipe } from "app/recipes/Shared/recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
   recipe : Recipe ; 
   constructor() { }

  ngOnInit() {
  }
  
  onRecipeRecieved(recipeRecieved : Recipe)
  {
     console.log("recipes : onRecipeRecieved" + recipeRecieved.name)
     this.recipe = recipeRecieved;
  }
}
