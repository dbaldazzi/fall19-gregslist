//import CarController from "./controllers/CarController.js";
import JobsController from "./controllers/JobsController.js";

class App {
  constructor() {
    this.controllers = {
      JobsController: new JobsController()
    }
  }
}


window["app"] = new App()