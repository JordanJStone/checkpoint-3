import { itemService } from "../Services/ItemService.js";


export default class ItemController {
  constructor() {
    // comment
  }

  createItem(listId) {
    window.event.preventDefault()

    let form = window.event.target
    let rawItem = {
      // @ts-ignore
      title: form.itemTitle.value,
      listId: listId
    }
    itemService.createItem(rawItem)

    // @ts-ignore
    form.reset()
  }

  delete(itemId) {
    itemService.delete(itemId)
  }
}
