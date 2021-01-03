import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
    constructor({ title, id }) {
        this.title = title
        this.id = id || generateId()
    }

    get Template() {

        return /*html*/`
            <div class="card offset-1 col-3 px-0 my-2 d-flex justify-content-around">
                <div class="card-body p-0">
                    <h3 class="card-title">${this.title} <i type="button" class="fa fa-times btn btn-danger"
                        onclick="app.listController.deleteList('${this.id}')" aria-hidden="true"></i>
                    </h3>

                        <div class="row">
                        ${this.Items}
                        </div>

                    <form onsubmit="app.itemController.createItem('${this.id}')" >
                      <div class="form-group">
                        <input type="text" class="form-control" name="itemTitle" id="itemTitle"
                            placeholder="New Item">
                        <button class="btn btn-success" type="submit">+</button>
                      </div>
                    </form>

                </div>
            </div>
        `
    }

    get Items() {
        let template = ""
        let items = ProxyState.items.filter(t => t.listId == this.id)
        items.forEach(t => template += t.Template)
        return template
    }
}
