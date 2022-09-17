import { Combobox } from "./services/combobox.js";
import { recipes } from "./data/recipes.js";
import { Recipe } from "./models/recipe.js";
import { RecipeCard } from "./views/recipecard.js";

class App {
  constructor() {}

  main() {
    recipes
      .map((recipe) => new Recipe(recipe))
      .forEach((recipe) => {
        const Template = new RecipeCard(recipe);
        Template.createRecipeCard();
      });

    const combobox = new Combobox();
    combobox.render();
  }
}

const app = new App();
app.main();
