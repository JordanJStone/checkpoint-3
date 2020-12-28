import { ProxyState } from "../AppState.js";
import Item from "../Models/Item.js";
import List from "../Models/List.js";

export function saveState() {
  localStorage.setItem("listData", JSON.stringify({ lists: ProxyState.lists, items: ProxyState.items }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem("listData"))

  if (data) {
    ProxyState.lists = data.lists.map(p => new List(p))

    ProxyState.items = data.items.map(t => new Item(t))
  }
}