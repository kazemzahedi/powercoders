function shomare1() {
    setClass('hide-list1', 'show-l');
    setClass('hide-list2', 'hide-l');
    setClass('hide-list3', 'hide-l');
    setClass('hide-list4', 'hide-l');
    setClass('hide-list5', 'hide-l');
    setClass('img-1', '');
    setClass('img-2', 'hide');
    setClass('img-3', 'hide');
    setClass('img-4', 'hide');
    setClass('img-5', 'hide');
}

function shomare2() {
  setClass('hide-list1', 'hide-l');
  setClass('hide-list2', 'show-l');
  setClass('hide-list3', 'hide-l');
  setClass('hide-list4', 'hide-l');
  setClass('hide-list5', 'hide-l');
  setClass('img-1', 'hide');
  setClass('img-2', '');
  setClass('img-3', 'hide');
  setClass('img-4', 'hide');
  setClass('img-5', 'hide');
}

function shomare3() {
  setClass('hide-list1', 'hide-l');
  setClass('hide-list2', 'hide-l');
  setClass('hide-list3', 'show-l');
  setClass('hide-list4', 'hide-l');
  setClass('hide-list5', 'hide-l');
  setClass('img-1', 'hide');
  setClass('img-2', 'hide');
  setClass('img-3', '');
  setClass('img-4', 'hide');
  setClass('img-5', 'hide');
}

function shomare4() {
  setClass('hide-list1', 'hide-l');
  setClass('hide-list2', 'hide-l');
  setClass('hide-list3', 'hide-l');
  setClass('hide-list4', 'show-l');
  setClass('hide-list5', 'hide-l');
  setClass('img-1', 'hide');
  setClass('img-2', 'hide');
  setClass('img-3', 'hide');
  setClass('img-4', '');
  setClass('img-5', 'hide');
}

function shomare5() {
  setClass('hide-list1', 'hide-l');
  setClass('hide-list2', 'hide-l');
  setClass('hide-list3', 'hide-l');
  setClass('hide-list4', 'hide-l');
  setClass('hide-list5', 'show-l');
  setClass('img-1', 'hide');
  setClass('img-2', 'hide');
  setClass('img-3', 'hide');
  setClass('img-4', 'hide');
  setClass('img-5', '');
}


function setClass(id, className) {
    let el=document.getElementById(id);
    el.className = className;
}
