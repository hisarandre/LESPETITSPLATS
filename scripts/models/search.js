//OBSERVABLE
// filter the data
import { recipes } from "../data/recipes.js";

export class Search {
  constructor(entry) {
    this.entry = entry;
    this.recipes = [];
  }

  // get input entry, filter data and return in the constructor array
  getRecipes() {
    let recipeByName = recipes.filter((recipe) => recipe.name.toLowerCase().includes(this.entry.toLowerCase()));
    recipeByName.map((recipe) => this.recipes.push(recipe));
  }
}
