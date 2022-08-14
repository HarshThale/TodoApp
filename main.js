let submit = document.getElementById('btn-submit');
let items = document.getElementById('items');

submit.addEventListener('click', addItem);


function addItem(e) {
    //to take input we have selected input box
    let input = document.getElementById('input');

    //created li to push the items
    let li = document.createElement('li');
    li.id = 'added-items';
    li.className = 'item-group';

    //create p to store input value
    let p = document.createElement('p');
    p.className = 'item-name';

    // add input text in li
    p.appendChild(document.createTextNode(input.value));

    //created div to store btns 
    let div = document.createElement('div');
    div.className = 'buttons';

    //create complete and delete btn
    let complete = document.createElement('button');
    complete.id = 'done';
    complete.className = 'complete-btn mp';
    complete.appendChild(document.createTextNode('Complete'));

    //delete
    let deleteBtn = document.createElement('button');
    deleteBtn.id = 'remove';
    deleteBtn.className = 'rm-btn mp'
    deleteBtn.appendChild(document.createTextNode('Remove'))

    //add delete and complete in div
    div.append(complete, deleteBtn);

    //add p and div in li
    li.append(p, div)


    //ad li to ul
    items.appendChild(li)

    //reset value after clicking button
    input.value = '';
}