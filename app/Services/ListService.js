import { ProxyState } from "../AppState.js";
import Value from "../Models/List.js";

class ValuesService {
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
}

export const valuesService = new ValuesService();

