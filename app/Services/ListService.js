import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js"

class ListService {
  deleteList(id) {
    ProxyState.lists = ProxyState.lists.filter(p => p.id != id)
    ProxyState.items = ProxyState.items.filter(t => t.listId != id)
    confirm("Are you sure you want to delete this?");
  }
  createList(rawList) {
    let list = new List(rawList)

    let lists = ProxyState.lists
    lists.push(list)

    ProxyState.lists = lists
  }

  // colorPicker() {
  //   document.getElementById('colorSelector').style.backgroundColor = 'green', 'blue', 'orange', 'purple', 'brown';
  // }

  constructor() {
    ProxyState.on("lists", saveState)
  }
}

export const listService = new ListService();

