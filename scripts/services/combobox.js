export class Combobox {
  constructor() {
    this._$inputIngredient = document.getElementById("ingredient");
    this._$inputAppareil = document.getElementById("appareil");
    this._$inputUstensil = document.getElementById("ustensil");
    this._$options = document.querySelectorAll(".combobox-wrapper li");
  }

  addEventListener() {
    //show and close combobox
    document.body.addEventListener("click", (e) => {
      var anyInput = e.target === this._$inputUstensil || e.target === this._$inputAppareil || e.target === this._$inputIngredient;
      anyInput ? this.show(e) : this.reset();
    });

    //select the option
    this._$options.forEach((option) =>
      option.addEventListener("click", (e) => {
        this.selectOption(e);
        this.close();
      })
    );
  }

  selectOption(e) {
    console.log(e.target.dataset.option);
  }

  show(e) {
    let $combobox = e.target.parentNode.parentNode;
    let $category = e.target.dataset.category;

    this.reset();
    $combobox.classList.add("active", "col-lg-6", "col-md-8");
    $combobox.classList.remove("col-lg-2", "col-md-4");
    e.target.setAttribute("placeholder", "Rerchercher un " + $category);
  }

  close() {
    let $combobox = document.querySelector(".combobox-wrapper.active");
    let $input = document.querySelector(".combobox-wrapper.active input");
    let $category = $input.dataset.category;

    $combobox.classList.remove("active", "col-lg-6", "col-md-8");
    $combobox.classList.add("col-lg-2", "col-md-4");
    $input.setAttribute("placeholder", $category + "s");
  }

  reset() {
    const $comboboxOpen = document.querySelectorAll(".combobox-wrapper.active").length > 0;
    if ($comboboxOpen) {
      this.close();
    }
  }

  render() {
    this.addEventListener();
  }
}
