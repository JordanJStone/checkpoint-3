import { ProxyState } from "../AppState.js";
import Item from "../Models/Item.js";
import { saveState } from "../Utils/LocalStorage.js";


class ItemService {
  persistCheckmarks(rawChecks) {

  }

  delete(itemId) {
    if (confirm('Confirm deletion?'))
      ProxyState.items = ProxyState.items.filter(t => t.id != itemId)
    // confirm("Are you sure you want to delete this?");
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

export const itemService = new ItemService()
