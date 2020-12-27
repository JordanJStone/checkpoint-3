import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class Value {
    constructor({ title, id }) {
        this.title = title
        this.id = id || generateId()
    }

    get Template() {

        return /*html*/`

        `
    }
}
