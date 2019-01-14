/**
 * Create and returns an 'li' element for inclusion in the shopping list.
 *
 * @param {string} itemName Name of the item to add to the list
 * @returns {HTMLElement} li element
 */
function creatNewListItem(itemName) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const text_span = document.createTextNode(itemName);


  const deleteButton = document.createElement('button');
  const delete_text = document.createTextNode('delete'); //delete_text.textContent = 'delete';

  //Add a click handler that logs the click here
  deleteButton.addEventListener('click', function (event) {
    console.log('Delete button clicked: ' + itemName);
    li.remove();
  }); // this function can call the all of variable,that is in up.

  span.appendChild(text_span);
  deleteButton.appendChild(delete_text);

  li.appendChild(span);
  li.appendChild(deleteButton);
  return li;
}

document.addEventListener('DOMContentLoaded', function (event) {

  const inputBox = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button');

  addItemButton.addEventListener('click', function (event) {
    inputBox.value = inputBox.value.trim();   //x = x.trim();

    shoppingList.appendChild(creatNewListItem(inputBox.value.trim()));
    inputBox.value = '';
    addItemButton.disabled = true;
    inputBox.focus();
  });

  inputBox.addEventListener('keyup', function (event) {
    const trimmedValue = inputBox.value.trim();
    addItemButton.disabled = trimmedValue === '';

    if (trimmedValue === ''){
      return;
    }

    if (event.key !== 'Enter') {
      return;
    }

    shoppingList.appendChild(creatNewListItem(trimmedValue));
    inputBox.value = '';
    addItemButton.disabled = true;
  });

  inputBox.focus();
  addItemButton.disabled = true;
});