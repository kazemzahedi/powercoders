document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('button').addEventListener('click', function (event) {
        console.log('The button was clicked');
        let inputBox = document.getElementById('item');
        inputBox.value;
        function creatNesListItem() {
            let li = document.createElement('li');
            let span = document.createElement('span');
            let button = document.createElement('button');

            let text_span = document.createTextNode(inputBox.value);
            let text_button = document.createTextNode('delete');

            span.appendChild(text_span);
            button.appendChild(text_button);
            li.appendChild(span);
            li.appendChild(button);
            document.querySelector('ul').appendChild(li);
        };
        creatNesListItem();

    });
});

