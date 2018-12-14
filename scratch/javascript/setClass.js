//Javascript code goes here
console.log('My code is running');

function greet(name) {
  console.log('hello, ' + name);
}


function setClassTip(event) {
  let el = document.getElementById('mypara');
  el.className = 'tip';
  alert ('You want the color of the text to be green');
}

function setClassWarning(event) {
  let el = document.getElementById('mypara');
  el.className = 'warning';
  alert ('You want the color of the text to be red');
}

function clearClass(event) {
  let el = document.getElementById('mypara');
  el.className = '';
}
