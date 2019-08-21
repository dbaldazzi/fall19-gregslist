import Jobs from "../models/jobs.js";
import Car from "../models/Car.js";

let _state = {
  jobs: [new Jobs({
    type: "Stick",
    size: "2000sqft",
    bedrooms: 4,
    bathrooms: 2,
    year: 2000,
    price: "$400,000",
    description: "Four bed, Two bath home with 2000 sqft"
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
}
