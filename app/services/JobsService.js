import Jobs from "../models/jobs.js";

let _state = {
  jobs: [new Jobs({
    type: "Office",
    salary: "$50,000",
    hours: "8am-5pm",
    days: "M-F",
    description: "Make $50,000 sitting in an office"
  })]
}

export default class JobService {
  deleteJob(id) {
    _state.jobs.forEach((Jobs, i) => {
      if (Jobs._id == id) {
        _state.cars.splice(i, 1)
      }
    })
  }


  addJob(newJob) {
    _state.jobs.push(new Jobs(newJob))
    console.log(_state.jobs)
  }

  constructor() {
    console.log("hello from service")
    console.log(_state.jobs)
  }
  get Jobs() {
    return _state.jobs.map(job => new Jobs(job))
  }
} 
