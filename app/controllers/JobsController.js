
import JobService from "../services/JobsService.js";
import Jobs from "../models/jobs.js";
//import CarService from "../services/CarService.js";

let _jobsService = new JobService()
debugger

function _draw() {
  let template = ""
  let job = _jobsService.Jobs

  Jobs.forEach((job, index) => {
    template += job.template
  })

  document.querySelector("#jobs").innerHTML = template
}
console.log("controller")
export default class JobsController {
  constructor() {
    console.log("hello from controller")
    _draw()
  }

  deleteJob(id) {
    _jobsService.deleteJob(id)
    _draw()
  }

  addJob(event) {
    event.preventDefault()
    let form = event.target

    let newJobs = {
      type: form.type.value,
      salary: form.salary.value,
      hours: form.hours.value,
      days: form.days.value,
      description: form.descrition.value
    }
    _jobsService.addJob(newJobs)
    _draw()
  }
}