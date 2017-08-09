import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "app/recipes/Shared/recipe.model";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  
  @Input() recipe : Recipe = new Recipe('sample','sample',
    "https://www.flooringvillage.co.uk/ekmps/shops/flooringvillage/images/request-a-sample--547-p.jpg");

  constructor() {
   
   }

  ngOnInit() {
  }

}
