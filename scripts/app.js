import { Combobox } from "./services/combobox.js";
import { FilterTag } from "./services/filtertag.js";
import { recipes } from "./data/recipes.js";
import { Search } from "./models/search.js";
import { RecipeCard } from "./views/recipecard.js";
import { SearchView } from "./views/searchview.js";

class App {
  constructor() {
    this.searchView = new SearchView();
    this.recipeCard = new RecipeCard();
    this.combobox = new Combobox();
    this.filtertag = new FilterTag();
    this._$searchInput = document.getElementById("search-bar");
  }

  main() {
    this._$searchInput.addEventListener("input", () => {
      this.searchController();
    });

    this.recipeCard.render(recipes);
    this.combobox.render();
    this.filtertag.render();
  }

  searchController() {
    const entry = this.searchView.getInput();

    //if there is something in the search view
    if (entry) {
      const search = new Search(entry);

      this.searchView.clearResults();
      search.getRecipes();

      if (search.recipes.length) {
        console.log(search.recipes);
        this.recipeCard.render(search.recipes);
      } else {
        //show error message
      }
    }
  }
}

const app = new App();
app.main();
