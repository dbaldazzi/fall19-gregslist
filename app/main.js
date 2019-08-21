//import CarController from "./controllers/CarController.js";
import JobsController from "./controllers/JobsController.js";

class App {
  constructor() {
    this.controllers = {
      JobsController: new JobsController()
    }
  }
}

console.log("main")
window["app"] = new App()