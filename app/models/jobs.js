

export default class Jobs {
  constructor(data) {
    this._id = data.id || Math.floor(Math.random() * 3000000)
    this.type = data.type
    this.size = data.size
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.year = data.year
    this.price = data.price
    this.description = data.description || "No description provided"
  }
  get Template() {
    return `
    <div class="col-r border"> 
    <h1>${this.type}</h1>
    <h3>${this.size}</h3>
    <p>${this.bedrooms}</p>
    <p>${this.bathrooms}</p> 
    <p>${this.year}</p> 
    <h3>${this.price}</h3>
    <p>${this.description}</p> 
    <button class="btn btn-danger" onclick="app.controller.jobsController.deleteJob(${this._id}">Delete Car</button>
    </div> 
    `
  }
}