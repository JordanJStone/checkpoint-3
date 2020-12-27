import ValuesController from "./Controllers/ListController.js";

class App {
  valuesController = new ValuesController();
}

window["app"] = new App();
