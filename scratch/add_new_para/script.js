function addPara() {
    let elp = document.createElement('p');
    let pContent = document.createTextNode('Second para');
    elp.appendChild(pContent);
    let pBody = document.getElementById('body');
    pBody.appendChild(elp);
}

function addList() {
    //TODO: Create the ul
    let list = document.createElement('ul');

    //TODO: Create and oppend the first list item
    let listli = document.createElement('li');
    let textli = document.createTextNode('first list');
    list.appendChild(listli);
    listli.appendChild(textli);

    //TODO: Create and oppend the second list item
    let listli2 = document.createElement('li');
    let textli2 = document.createTextNode('This is ');
    let em = document.createElement('em');
    let textem = document.createTextNode('emphasised');
    em.appendChild(textem);
    let lilist2a = document.createTextNode(' text.')
    listli2.appendChild(textli2);
    listli2.appendChild(em);
    listli2.appendChild(lilist2a);
    list.appendChild(listli2);

    //TODO: Create and oppend the third list item
    let listli3 = document.createElement('li');
    list.appendChild(listli3);
    let textli3 = document.createTextNode('last list');
    listli3.appendChild(textli3);

    //TODO: Append the list to the body
    let pBody = document.getElementById('body');
    pBody.appendChild(list);
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.getElementById('onclick').addEventListener('click', function() {
        addPara();
    });
    document.getElementById('click').addEventListener('click', function() {
        addList();
    });

});
