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

/**
 * set up event listeners and configure initial element state when the
 * DOM is ready.
 */

function domContentLoaded() {
  const quantityBox = document.getElementById('quantity');
  const inputBox = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button');
  const clearListButton = document.querySelector('button#clear');

  function clickButton() {
    const trimmedValue = inputBox.value.trim();
    const trimmedValueQuantity = quantityBox.value.trim();

    const item = new ShoppingListItem(trimmedValue, trimmedValueQuantity);

    shoppingList.appendChild(item.toListItem());
    inputBox.value = '';
    quantityBox.value = '';
    addItemButton.disabled = true;
    clearListButton.disabled = false;
    inputBox.focus();
  }

  function onkeyup(event) {
    const trimmedValue = inputBox.value.trim();
    const trimmedValueQuantity = quantityBox.value.trim();
    addItemButton.disabled = trimmedValue === '';

    if (trimmedValue === ''){
      return;
    }

    if (event.key !== 'Enter') {
      return;
    }

    const item = new ShoppingListItem(trimmedValue, trimmedValueQuantity);

    shoppingList.appendChild(item.toListItem());
    inputBox.value = '';
    quantityBox.value = '';
    addItemButton.disabled = true;
    clearListButton.disabled = false;
    inputBox.focus();
  }

  function deleteAllList(){
    const items = document.querySelectorAll('li');
    items.forEach(function(element) {
      element.remove();
    });
    inputBox.focus();
    clearListButton.disabled = true;
  }

  addItemButton.addEventListener('click', clickButton);
  inputBox.addEventListener('keyup', onkeyup);
  quantityBox.addEventListener('keyup', onkeyup);
  clearListButton.addEventListener('click', deleteAllList);

  clearListButton.disabled = true;
  addItemButton.disabled = true;
  inputBox.focus();
}


if(document.readyState === 'loading') {
  //DOMContentLoaded has not fired yet.
  document.addEventListener('DOMContentLoaded', function (event) {
    domContentLoaded();
  });
} else {
  //DOMContentLoaded has fired.
  domContentLoaded();
}
