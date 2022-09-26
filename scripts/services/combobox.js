export class Combobox {
  constructor() {
    this._$inputs = document.querySelectorAll(".combobox-wrapper input");
    this._$inputIngredient = document.getElementById("ingredient");
    this._$inputAppareil = document.getElementById("appareil");
    this._$inputUstensil = document.getElementById("ustensil");
  }

  handleEvent() {
    //show and close combobox
    document.body.addEventListener("click", (e) => {
      var anyInput = e.target === this._$inputUstensil || e.target === this._$inputAppareil || e.target === this._$inputIngredient;
      anyInput ? this.show(e) : this.reset();
    });

    this._$inputs.forEach((input) =>
      input.addEventListener("keyup", (e) => {
        const category = e.target.dataset.category;
        this.autocomplete(e, category);
      })
    );
  }

  autocomplete(e, category) {
    let $list = Array.from(document.querySelectorAll(`.content.${category}s li`));
    $list.forEach((tag) => (tag.style.display = "inline-block"));

    const autocompleTag = $list.filter((tag) => !tag.dataset.option.includes(e.target.value));
    autocompleTag.forEach((tag) => (tag.style.display = "none"));
  }

  show(e) {
    let $combobox = e.target.parentNode.parentNode;
    let $category = e.target.dataset.category;

    this.reset();
    $combobox.classList.add("active");
    e.target.setAttribute("placeholder", "Rerchercher un " + $category);
  }

  close() {
    let $combobox = document.querySelector(".combobox-wrapper.active");
    let $input = document.querySelector(".combobox-wrapper.active input");
    let $category = $input.dataset.category;

    $input.value = "";
    $combobox.classList.remove("active");
    $input.setAttribute("placeholder", $category + "s");
  }

  reset() {
    const $comboboxOpen = document.querySelectorAll(".combobox-wrapper.active").length > 0;
    if ($comboboxOpen) {
      this.close();
    }
  }

  render() {
    this.handleEvent();
  }
}
