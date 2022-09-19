import { Recipe } from "../models/recipe.js";
export class RecipeCard {
  constructor() {
    //this._data = data;
  }

  createRecipeCard(data) {
    const $container = document.getElementById("recipes-section");
    const $template = document.getElementById("template");
    const clone = $template.content.cloneNode(true);

    let $title = clone.querySelector(".card-title");
    $title.textContent = data.name;

    let $time = clone.querySelector(".card-timing");
    $time.textContent = `${data.time} min`;

    let $description = clone.querySelector(".card-text");
    $description.textContent = data.description;

    data.ingredients.forEach((ingredient) => {
      const $list = clone.querySelector(".card-list");
      const $item = document.createElement("li");

      var name = ingredient.ingredient;
      var quantity = ingredient.quantity;
      var unit = ingredient.unit;
      var result;

      if (quantity === undefined) {
        result = `<strong> ${name}</strong> `;
      } else if (unit === undefined) {
        result = `<strong> ${name}</strong> : ${quantity} `;
      } else {
        result = `<strong> ${name}</strong> : ${quantity} ${unit} `;
      }

      $item.innerHTML = result;
      $list.appendChild($item);
    });

    $container.appendChild(clone);
  }

  render(recipes) {
    recipes
      .map((recipe) => new Recipe(recipe))
      .forEach((recipe) => {
        this.createRecipeCard(recipe);
      });
  }
}
