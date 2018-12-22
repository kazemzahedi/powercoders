//Javascript code goes here
//console.log('My code is running');

//function greet(name) {
//  console.log('hello, ' + name);
//}
/////////////////////////////////////
//console.log('This is the first JS line');
function setClass(className) {
//    console.log('setClass is running');

//  let el = document.getElementById('mypara')
//  el.className = className;
    let el = document.getElementById('mypara').className = className;
}

//console.log('This is after setClass is defined');

document.addEventListener('DOMContentLoaded', function () {
//    console.log('DOMContentLoaded has fired');
//moder aval-1
    document.getElementById('make-warning').addEventListener('click', function(event) {
//        console.log('click listener fired');
        setClass( 'warning');
    });
    document.getElementById('make-tip').addEventListener('click', function (event) {
        setClass('tip');
    });
//model dovom-2 asantar baray khandan code ha
    let makeClear = document.getElementById('make-clear');
    makeClear.addEventListener('click', function(event) {
        setClass('');
    });
});

//function setClassTip(event) {
// let el = document.getElementById('mypara');
// el.className = 'tip';
//}

//function setClassWarning(event) {
// let el = document.getElementById('mypara');
// el.className = 'warning';
//}

//function clearClass(event) {
//let el = document.getElementById('mypara');
//el.className = '';
//}
