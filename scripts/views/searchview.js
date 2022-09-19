//OBSERVER/SUBJECT

export class SearchView {
  constructor() {
    this._$searchInput = document.getElementById("search-bar");
    this._$recipesSection = document.getElementById("recipes-section");
  }

  getInput() {
    return this._$searchInput.value;
  }

  clearResults() {
    this._$recipesSection.innerHTML = "";
  }

  udapte() {
    //envoie dans recipecard?
  }
}
