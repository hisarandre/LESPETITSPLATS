export class Combobox {
  constructor() {
    this.$inputs = document.querySelectorAll(".combobox-wrapper input");
  }

  showList() {
    this.$inputs.forEach((input) =>
      input.addEventListener("focus", (e) => {
        e.target.parentNode.parentNode.classList.add("active", "col-lg-6", "col-md-8");
        e.target.parentNode.parentNode.classList.remove("col-lg-2", "col-md-4");
        const nameInput = e.target.getAttribute("id");
        e.target.setAttribute("placeholder", "Rerchercher un " + nameInput);
      })
    );

    this.$inputs.forEach((input) =>
      input.addEventListener("blur", (e) => {
        e.target.parentNode.parentNode.classList.remove("active", "col-lg-6", "col-md-8");
        e.target.parentNode.parentNode.classList.add("col-lg-2", "col-md-4");
        const nameInput = e.target.getAttribute("id");
        e.target.setAttribute("placeholder", nameInput + "s");
      })
    );
  }

  render() {
    this.showList();
  }
}
