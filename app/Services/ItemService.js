import { ProxyState } from "../AppState.js";
import Item from "../Models/Item.js";
import { saveState } from "../Utils/LocalStorage.js"


class ItemService {
  delete(itemId) {
    ProxyState.lists = ProxyState.lists.filter(t => t.id != itemId)
  }
  createItem(rawItem) {
    let items = ProxyState.items
    items.push(new Item(rawItem))
    ProxyState.items = items
  }
  constructor() {
    ProxyState.on("items", saveState)
  }
}

export const itemService = new ItemService();
