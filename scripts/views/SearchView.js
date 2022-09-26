export class SearchView {
  constructor() {
    this._$searchInput = document.getElementById("search-bar");
    this._$recipesSection = document.getElementById("recipes-section");
    this._$recipesMessage = document.getElementById("recipes-message");
  }

  getInput() {
    return this._$searchInput.value;
  }

  clearResults() {
    this._$recipesSection.innerHTML = "";
    this._$recipesMessage.innerHTML = "";
  }

  noResult() {
    this._$recipesSection.innerHTML = "";
    this._$recipesMessage.innerHTML = "<p>Aucune recette ne correspond à votre critère…</p>";
  }
}
