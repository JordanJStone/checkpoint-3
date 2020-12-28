import { ProxyState } from "../AppState.js";
import Item from "../Models/Item.js";


class ItemService {
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
}

export const valuesService = new ValuesService();
