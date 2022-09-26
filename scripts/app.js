import { Combobox } from "./services/Combobox.js";
import { TagListView } from "./views/TagListView.js";
import { InputSearch } from "./services/InputSearch.js";
import { TagSearch } from "./services/TagSearch.js";
import { RecipeCard } from "./views/RecipeCard.js";
import { SearchView } from "./views/SearchView.js";
import { RecipeService } from "./services/RecipeService.js";

class App {
  constructor() {
    this.recipeService = new RecipeService();
    this.searchView = new SearchView();
    this.inputSearch = new InputSearch();
    this.tagSearch = new TagSearch();
    this.recipeCard = new RecipeCard();
    this.combobox = new Combobox();
    this.tagListView = new TagListView();

    this._recipeData = this.recipeService.getRecipe();
    this._tagsData = this.recipeService.getAllTags(this._recipeData);
    this._$searchInput = document.getElementById("search-bar");
  }

  main() {
    this.recipeCard.render(this._recipeData);
    this.tagListView.render(this._tagsData);
    this.combobox.render();

    this._$searchInput.addEventListener("input", () => {
      this.inputController();
    });

    document.querySelector("#search-section").addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        this.tagController(e);
        this.searchController();
      }
    });
  }

  searchController() {
    const inputActif = document.getElementById("search-bar").value.length;
    const tagActif = this.tagSearch.selectedTag.length;
    var newRecipes;

    if (inputActif && tagActif) {
      //both
      newRecipes = this.inputSearch.recipesFromInput.filter((recipeInput) =>
        this.tagSearch.recipesFromTag.some((recipeTag) => recipeInput._id === recipeTag._id)
      );
    } else if (!inputActif && tagActif) {
      //tag only
      newRecipes = this.tagSearch.recipesFromTag;
    } else if (inputActif && !tagActif) {
      //input only
      this.inputSearch.recipesFromInput ? (newRecipes = this.inputSearch.recipesFromInput) : this.searchView.noResult();
    } else if (!inputActif && !tagActif) {
      //empty
      newRecipes = this._recipeData;
    }

    //render the card
    if (newRecipes.length === 0) {
      this.searchView.noResult();
    } else {
      this.searchView.clearResults();
      this.recipeCard.render(newRecipes);
    }

    //render the taglist
    const newTags = this.recipeService.getAllTags(newRecipes);
    const tagSelected = this.tagSearch.selectedTag;
    this.tagListView.render(newTags, tagSelected);
  }

  inputController() {
    const entry = this.searchView.getInput();

    //if there is something in the search view
    if (entry.length >= 3) {
      this.inputSearch.filter(entry);
      this.searchController();

      //if the entry is less than 3 letters
    } else {
      this.inputSearch.recipesFromInput = this._recipeData;
      this.searchController();
    }
  }

  tagController(e) {
    //add or remove tagg
    if (e.target.id === "selected") {
      this.tagSearch.removeTag(e);
      this.tagListView.removeTag(e);
    } else {
      this.tagSearch.addTag(e);
      this.tagListView.createTag(e);
    }

    //if there is any tag selected
    if (this.tagSearch.selectedTag.length > 0) {
      this.tagSearch.udapte(this._recipeData);
    } else {
      this.tagSearch.recipesFromTag = [];
    }
  }
}

const app = new App();
app.main();
