function shomare1(event) {
    setClass('list1', 'list');
    setClass('list2', '');
    setClass('list3', '');
    setClass('list4', '');
    setClass('list5', '');
    setClass('text-1', '');
    setClass('text-2', 'hidden');
    setClass('text-3', 'hidden');
    setClass('text-4', 'hidden');
    setClass('text-5', 'hidden');
}

function shomare2(event) {
  setClass('list1', '');
  setClass('list2', 'list');
  setClass('list3', '');
  setClass('list4', '');
  setClass('list5', '');
  setClass('text-1', 'hidden');
  setClass('text-2', '');
  setClass('text-3', 'hidden');
  setClass('text-4', 'hidden');
  setClass('text-5', 'hidden');
}

function shomare3(event) {
  setClass('list1', '');
  setClass('list2', '');
  setClass('list3', 'list');
  setClass('list4', '');
  setClass('list5', '');
  setClass('text-1', 'hidden');
  setClass('text-2', 'hidden');
  setClass('text-3', '');
  setClass('text-4', 'hidden');
  setClass('text-5', 'hidden');
}

function shomare4(event) {
  setClass('list1', '');
  setClass('list2', '');
  setClass('list3', '');
  setClass('list4', 'list');
  setClass('list5', '');
  setClass('text-1', 'hidden');
  setClass('text-2', 'hidden');
  setClass('text-3', 'hidden');
  setClass('text-4', '');
  setClass('text-5', 'hidden');
}

function shomare5(event) {
  setClass('list1', '');
  setClass('list2', '');
  setClass('list3', '');
  setClass('list4', '');
  setClass('list5', 'list');
  setClass('text-1', 'hidden');
  setClass('text-2', 'hidden');
  setClass('text-3', 'hidden');
  setClass('text-4', 'hidden');
  setClass('text-5', '');
}


function setClass(id, className) {
    let el=document.getElementById(id);
    el.className = className;
}
