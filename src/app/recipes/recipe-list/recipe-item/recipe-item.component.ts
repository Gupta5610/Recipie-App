import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from "app/recipes/Shared/recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('recipeItem') recipe : Recipe ;
  constructor() { }

  ngOnInit() {
  }

}
