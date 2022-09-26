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

  noResult() {
    this._$recipesSection.innerHTML = "<p>Aucune recette ne correspond à votre critère…</p>";
  }
}
