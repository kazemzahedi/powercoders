document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('button').addEventListener('click', function (event) {
        console.log('The button was clicked');
        let inputBox = document.getElementById('item');
        inputBox.value;
        let addlist = document.createElement("li");
        let textli = document.createTextNode(inputBox.value);
        addlist.appendChild(textli);
        document.getElementById("list").appendChild(addlist);

    });
});

