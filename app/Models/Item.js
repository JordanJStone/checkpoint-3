import { generateId } from "../Utils/GenerateId.js"

export default class Item {
  constructor({ title, listId, id, checkbox }) {
    this.title = title
    this.id = id || generateId(),
      this.listId = listId
    this.checkbox = checkbox
  }

  get Template() {
    return /*html*/`
    <div class="offset-2 col-9 p-0 d-flex justify-content-between">
      <input class="form-check-input" type="checkbox" value="">
      <h6>
      ${this.title}
      </h6>
      <i class="fa fa-trash text-danger cursor-pointer position-relative end-100" onclick="app.itemController.delete('${this.id}')" aria-hidden="true"></i>
    </div>
        `
  }
}