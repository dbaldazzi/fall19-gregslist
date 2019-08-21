

export default class Jobs {
  constructor(data) {
    this._id = data.id || Math.floor(Math.random() * 3000000)

  }
}