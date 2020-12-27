import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class Value {
    constructor({ title, id }) {
        this.title = title
        this.id = id || generateId()
    }

    get Template() {

        return /*html*/`
<div class="card col-md-4">
                <h5 class="card-header">${this.title}</h5>
                <div class="card-body">
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <div class="input-group flex-nowrap">
                        <input type="text" class="form-control" placeholder="new item" aria-label="Username"
                            aria-describedby="addon-wrapping">
                        <button type="button" class="btn btn-primary">+</button>
                    </div>
                </div>
            </div>
        `
    }
}
