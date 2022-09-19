export class Combobox {
  constructor() {
    this._$inputs = document.querySelectorAll(".combobox-wrapper input");
    this._$inputIngredient = document.getElementById("ingredient");
    this._$inputAppareil = document.getElementById("appareil");
    this._$inputUstensil = document.getElementById("ustensil");
    this._$options = document.querySelectorAll(".combobox-wrapper li");
  }

  handleEvent() {
    //show and close combobox
    document.body.addEventListener("click", (e) => {
      var anyInput = e.target === this._$inputUstensil || e.target === this._$inputAppareil || e.target === this._$inputIngredient;
      anyInput ? this.show(e) : this.reset();
    });

    // hide element list if clicked
    this._$options.forEach((option) =>
      option.addEventListener("click", (e) => {
        e.target.style.display = "none";
      })
    );

    // filter input
    this._$inputs.forEach((input) =>
      input.addEventListener("keyup", () => {
        let $combolist = input.parentNode.parentNode.lastElementChild;
        $combolist.innerHTML = "";
      })
    );
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
