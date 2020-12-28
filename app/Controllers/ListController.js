import { ProxyState } from "../AppState.js";
import { listService } from "../Services/ListService.js";


//Private
function _draw() {
  let template = ""
  ProxyState.lists.forEach(p => template += p.Template)
  document.getElementById("lists").innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    ProxyState.on("lists", _draw);
    ProxyState.on("items", _draw);
    _draw()
  }

  createList() {
    window.event.preventDefault()
    let form = window.event.target

    let rawList = {
      title: form.title.value
    }
    listService.createList(rawList)

    // form.reset()
  }

  deleteList(id) {
    listService.deleteList(id)
  }


}
