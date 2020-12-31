import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
    constructor({ title, id }) {
        this.title = title
        this.id = id || generateId()
    }

    get Template() {

        return /*html*/`
            <div class="card col-md-4">
                <h5 class="card-header text-center">${this.title}<i type="button" class="fa fa-times btn btn-danger"
                        onclick="app.listController.deleteList('${this.id}')" aria-hidden="true"></i></h5>

                <div class="card-body">
                <div class="row">${this.Item}</div>
                    <form onsubmit="app.itemController.createItem('${this.id}')">
                        <div class="row">
                            <input type="text" class="form-control" placeholder="new item" aria-label="Username"
                                aria-describedby="addon-wrapping">
                            <button class="btn btn-primary" type="submit">+</button>
                        </div>
                    </form>
                </div>
            </div>
        `
    }

    get Item() {
        let template = ""
        let items = ProxyState.items.filter(t => t.listId == this.id)
        items.forEach(t => template += t.Template)
        return template
    }
}
