export class FilterTag {
  constructor() {
    this._$options = document.querySelectorAll(".combobox-wrapper li");
    this._$tagContainer = document.getElementById("tags-wrapper");
  }

  handleEvent() {
    //create the tag and add color by category
    this._$options.forEach((option) =>
      option.addEventListener("click", (e) => {
        let $input = e.target.parentNode.previousElementSibling.firstElementChild;
        let $category = $input.dataset.category;

        this.createTag(e, $category);
      })
    );
  }

  createTag(e, categoryColor) {
    let $tagContent = e.target.dataset.option;

    const $tag = document.createElement("li");
    $tag.textContent = $tagContent;

    switch (categoryColor) {
      case "ingredient":
        $tag.classList.add("ingredients");
        break;
      case "appareil":
        $tag.classList.add("appareils");
        break;
      case "ustensil":
        $tag.classList.add("ustensils");
        break;
    }

    this._$tagContainer.appendChild($tag);
  }

  removeTag(e) {
    e.target.style.display = "none";
  }

  render() {
    this.handleEvent();
  }
}
