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
