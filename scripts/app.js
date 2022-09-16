import { Combobox } from "./services/combobox.js";

class App {
  constructor() {}

  main() {
    const combobox = new Combobox();
    combobox.render();
  }
}

const app = new App();
app.main();
