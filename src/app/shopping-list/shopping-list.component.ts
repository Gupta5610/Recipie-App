import { Component, OnInit } from '@angular/core';
import { Ingredient } from "app/Shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

   ingredients : Ingredient[] = [
     new Ingredient('Salt',10),new Ingredient('Pepper',15)
   ];
  constructor() { }

  ngOnInit() {
  }

}
