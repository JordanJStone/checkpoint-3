import { itemService } from "../Services/ItemService.js";


export default class ItemController {

  createItem(listId) {
    window.event.preventDefault()

    let form = window.event.target
    let rawItem = {
      title: form.itemTitle.value,
      listId: listId
    }
    itemService.createItem(rawItem)

    form.reset()
  }

  delete(itemId) {
    itemService.delete(itemId)
  }
}
