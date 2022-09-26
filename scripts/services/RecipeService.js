import { recipes } from "../data/recipes.js";
import { Recipe } from "../models/Recipe.js";

export class RecipeService {
  getRecipe() {
    return recipes.map((recipe) => new Recipe(recipe));
  }

  getUstensils(data) {
    const recipes = data;
    const allUstensils = [];

    recipes.forEach((recipe) => recipe._ustensils.forEach((ustensil) => allUstensils.push(ustensil.toLowerCase())));
    return [...new Set(allUstensils)];
  }

  getIngredients(data) {
    const recipes = data;
    const allIngredients = [];

    recipes.forEach((recipe) => recipe._ingredients.forEach((ingredient) => allIngredients.push(ingredient.ingredient.toLowerCase())));
    return [...new Set(allIngredients)];
  }

  getAppareils(data) {
    const recipes = data;
    const allAppareils = [];

    recipes.forEach((recipe) => {
      allAppareils.push(recipe._appliance.toLowerCase());
    });
    return [...new Set(allAppareils)];
  }

  getAllTags(data) {
    const allTags = [
      {
        category: "ingredients",
        tag: this.getIngredients(data),
      },
      {
        category: "appareils",
        tag: this.getAppareils(data),
      },
      {
        category: "ustensils",
        tag: this.getUstensils(data),
      },
    ];

    return allTags;
  }
}
