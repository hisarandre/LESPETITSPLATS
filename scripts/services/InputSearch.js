import { RecipeService } from "./RecipeService.js";

export class InputSearch {
  constructor() {
    this.recipeService = new RecipeService();

    this.recipeData = this.recipeService.getRecipe();
    this.recipesFromInput = [];
  }

  // get input entry, filter data and return in the constructor array
  filter(entry) {
    let filteredRecipe = this.recipeData.filter(
      (recipe) =>
        recipe._name.toLowerCase().includes(entry.toLowerCase()) ||
        recipe._description.toLowerCase().includes(entry.toLowerCase()) ||
        recipe._ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(entry.toLowerCase()))
    );

    this.recipesFromInput = [];
    filteredRecipe.map((recipe) => this.recipesFromInput.push(recipe));
  }
}
