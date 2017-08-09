import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from "app/recipes/Shared/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 @Output() recipeSelect : EventEmitter<Recipe> = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe('Tandoori chicken','chicken marinated in red sauce and the roasted in tandoor',
      'https://i.ytimg.com/vi/-CKvt1KNU74/maxresdefault.jpg'),
    new Recipe('Butter Nan','Nan with butter',
    'http://files.hungryforever.com/wp-content/uploads/2016/07/16123534/Butter-Naan-Recipe1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeClicked(recipeClicked:Recipe)
   {
     console.log("recipeList - onRecipeClicked :" + recipeClicked.name);
     this.recipeSelect.emit(recipeClicked);
   }

}
