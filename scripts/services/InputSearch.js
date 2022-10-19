import { RecipeService } from "./RecipeService.js";

export class InputSearch {
  constructor() {
    this.recipeService = new RecipeService();

    this.recipeData = this.recipeService.getRecipe();
    this.recipesFromInput = [];
  }

  // get input entry, filter data and return in the constructor array
  filter(entry) {
    this.recipesFromInput = [];

    for (let i = 0; i < this.recipeData.length; i++) {
      if (
        this.recipeData[i]._name.toLowerCase().includes(entry.toLowerCase()) ||
        this.recipeData[i]._description.toLowerCase().includes(entry.toLowerCase()) ||
        this.recipeData[i]._ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(entry.toLowerCase()))
      )
        this.recipesFromInput.push(this.recipeData[i]);
    }
  }
}
