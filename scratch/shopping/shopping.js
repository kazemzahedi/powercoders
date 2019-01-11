function creatNewListItem(itemName) {
  let li = document.createElement('li');

  let span = document.createElement('span');
  let text_span = document.createTextNode(itemName);


  let deleteButton = document.createElement('button');
  let delete_text = document.createTextNode('delete'); //delete_text.textContent = 'delete';

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
  let inputBox = document.getElementById('item');
  let shoppingList = document.querySelector('ul');

  document.querySelector('button').addEventListener('click', function (event) {
    inputBox.value = inputBox.value.trim();   //x = x.trim();
    if (inputBox.value !== '') {
      shoppingList.appendChild(creatNewListItem(inputBox.value.trim()));
      inputBox.value = '';
    }
    inputBox.focus();
  });

  //Add code here that listen for 'keyup' on the 'input' element
  inputBox.addEventListener('keyup', function (event) {
    if (inputBox.value.trim() !== ''){
      if (event.key === 'Enter') {
        shoppingList.appendChild(creatNewListItem(inputBox.value.trim()));
        inputBox.value = '';
      }
    }
  });

  inputBox.focus();
});
