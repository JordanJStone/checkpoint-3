import { ProxyState } from "../AppState.js";
import { valuesService } from "../Services/ListService.js";


//Private
function _draw() {
  let values = ProxyState.values;
  let template = ''
  values.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = /*html*/`
  <button className="btn btn-info" onclick="app.valuesController.addValue()">Add Value</button>  
  <div className="card-columns values">
      ${template}
  </div>
  `
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
    form.reset()
  }

  deleteList(id) {
    ListService.deleteList(id)
  }


}
