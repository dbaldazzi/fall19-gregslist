
import JobService from "../services/JobsService.js";
import Jobs from "../models/jobs.js";
//import CarService from "../services/CarService.js";

let _jobsService = new JobService()


function _draw() {
  let template = ""
  let job = _jobsService.Jobs

  Jobs.foreach((jobs, index) => {
    template += job.template
  })

  document.querySelector("#jobs").innerHTML = template
}

export default class JobsController {
  constructor() {
    console.log("hello from controller")
    _draw()
  }
}
debugger
delete (id) {
  _jobsService.deleteJob(_id)
  _draw(
}

addjob(event) {
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