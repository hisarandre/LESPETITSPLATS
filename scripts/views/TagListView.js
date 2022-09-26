import { RecipeService } from "../services/RecipeService.js";
import { TagSearch } from "../services/TagSearch.js";

export class TagListView {
  constructor() {
    this.tagSearch = new TagSearch();
    this.recipeService = new RecipeService();
    this._$tagContainer = document.getElementById("tags-wrapper");
  }

  createList(data, category) {
    let $dalaElement = document.createElement("li");
    $dalaElement.textContent = data;
    $dalaElement.setAttribute("data-option", data);
    let $category = document.querySelector(`.combobox-wrapper ul.${category}`);
    $category.appendChild($dalaElement);
  }

  reset() {
    document.querySelectorAll(".combobox-wrapper ul").forEach((list) => {
      list.textContent = "";
    });
  }

  createTag(e) {
    let $input = e.target.parentNode.previousElementSibling.firstElementChild;
    let $category = $input.dataset.category;
    let $tagContent = e.target.dataset.option;

    const $tag = document.createElement("li");
    $tag.textContent = $tagContent;
    $tag.setAttribute("data-option", $tagContent);
    $tag.setAttribute("id", "selected");
    $tag.classList.add($category + "s");

    this._$tagContainer.appendChild($tag);
  }

  removeTag(e) {
    e.target.style.display = "none";
  }

  render(tagsData, tagSelected) {
    this.reset();

    tagsData.forEach((dataArray) => {
      let category = dataArray.category;
      dataArray.tag.forEach((element) => {
        //if tag is selected, then don't render it in the list box
        if (tagSelected !== undefined && tagSelected.find((tag) => tag === element)) {
          return;
        } else {
          this.createList(element, category);
        }
      });
    });
  }
}
