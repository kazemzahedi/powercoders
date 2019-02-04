/**
 * Represents an item tn the shopping list.
 */
class ShoppingListItem {
  /**
   *
   * @param name {string} Name
   * @param quantity {string} Quantity
   */
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }

  /**
   * Create and returns an 'li' element for inclusion in the shopping list.
   *
   * @returns {HTMLElement} li element
   */
  toListItem() {
    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const text_span = document.createTextNode(this.name);
    span.appendChild(text_span);

    const deleteButton = document.createElement('i');
    //const delete_text = document.createTextNode('delete'); //delete_text.textContent = 'delete


    //Add a click handler that logs the click here
    deleteButton.addEventListener('click', function (event) {
      listItem.remove();

      //line (24 to 27) in line 22
      document.querySelector('button#clear').disabled = document.querySelectorAll('li').length === 0;

      //const clearListButton = document.querySelector('button#clear');
      //const listItemCheck = document.querySelectorAll('li');

      //clearListButton.disabled = listItemCheck.length === 0;
    }); // this function can call the all of variable,that is in up.

    listItem.appendChild(span);

    if (this.quantity !== ''){
      listItem.appendChild(document.createTextNode(''));
      const quantityText = document.createElement('span');
      quantityText.textContent = `(${this.quantity})`;
      listItem.appendChild(quantityText);
    }
    listItem.appendChild(deleteButton).className = 'fas fa-trash-alt';
    return listItem;

  }
}
