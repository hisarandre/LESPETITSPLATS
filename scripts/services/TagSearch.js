import { RecipeService } from "../services/RecipeService.js";

export class TagSearch {
  constructor() {
    this.recipeService = new RecipeService();
    this._recipeData = this.recipeService.getRecipe();

    this.recipesFromTag = [];
    this.selectedTag = [];
  }

  addTag(e) {
    this.selectedTag.push(e.target.dataset.option);
  }

  removeTag(e) {
    const removeIndex = this.selectedTag.findIndex((obs) => {
      return obs === e.target.dataset.option;
    });

    if (removeIndex !== -1) {
      this.selectedTag.splice(removeIndex, 1);
    }
  }

  udapte(data) {
    this.selectedTag.forEach((tag) => {
      this.filter(tag, data);
      data = this.recipesFromTag;
    });
  }

  filter(tag, data) {
    const filteredRecipe = data.filter(
      (recipe) =>
        recipe._ingredients.map((recipe) => recipe.ingredient.toLowerCase()).some((ingredient) => ingredient.includes(tag)) ||
        recipe._appliance.toLowerCase().includes(tag) ||
        recipe._ustensils.map((element) => element.toLowerCase()).some((element) => element.includes(tag))
    );

    this.recipesFromTag = [];
    filteredRecipe.map((recipe) => this.recipesFromTag.push(recipe));
  }
}
