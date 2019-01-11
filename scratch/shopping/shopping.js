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
    if (inputBox.value !== '') {
      shoppingList.appendChild(creatNewListItem(inputBox.value.trim()));
      inputBox.value = '';
      addItemButton.disabled = true;
    }
    inputBox.focus();
  });

  //Add code here that listen for 'keyup' on the 'input' element
  inputBox.addEventListener('keyup', function (event) {
    if (inputBox.value.trim() !== ''){
      addItemButton.disabled = false;
      if (event.key === 'Enter') {
        shoppingList.appendChild(creatNewListItem(inputBox.value.trim()));
        inputBox.value = '';
      }
    }
    if (inputBox.value.trim() === '') {
      addItemButton.disabled = true;
    }
  });

  inputBox.focus();
  addItemButton.disabled = true;
});
