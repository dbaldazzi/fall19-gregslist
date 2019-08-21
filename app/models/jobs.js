

export default class Jobs {
  constructor(data) {
    this._id = data.id || Math.floor(Math.random() * 3000000)
    this.type = data.type
    this.salary = data.salary
    this.hours = data.hours
    this.days = data.days
    this.description = data.description || "No description provided"
  }
  get template() {
    return `
    <div class="col-r border"> 
    <h1>${this.type}</h1>
    <h3>${this.salary}</h3>
    <p>${this.hours}</p>
    <p>${this.days}</p> 
    <p>${this.description}</p> 
    <button class="btn btn-danger" onclick="app.controller.jobsController.deleteJob(${this._id}">Delete Job</button>
    </div> 
    `
  }
}
console.log("Hello from jobs")