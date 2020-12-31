import { generateId } from "../Utils/GenerateId.js"

export default class Item {
  constructor({ title, listId, id }) {
    this.title = title
    this.id = id || generateId()
    this.listId = listId
  }

  get Template() {

    return /*html*/`
    <div class="col-6">
    <h5>
    ${this.title}
    <i class="fa fa-trash text-danger cursor-pointer" onclick="app.itemController.delete('${this.id}')" aria-hidden="true"></i>
    </h5>
    </div>
        `
  }
}