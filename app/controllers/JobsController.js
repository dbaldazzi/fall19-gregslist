
import JobService from "../services/JobsService.js";

let _jobsService = new JobService()






export default class JobsController {
  constructor() {
    console.log("hello from controller")
    _draw()
  }
}