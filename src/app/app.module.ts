import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './Recipes/recipe-details/recipe-details.component';
import { RecipeListComponent } from './Recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './Recipes/Recipe-List/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from "app/shopping-list/shopping-edit/shopping-edit.component";
import { DrowpdownDirectiveDirective } from './Shared/drowpdown-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DrowpdownDirectiveDirective,
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
