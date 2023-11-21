const form = document.querySelector('form');
const listTodos = document.querySelector('.list-todos');
const clearTodos = document.querySelector('.clear');
const itemsTodos = document.querySelector('.items-todos');
const btnFinished = document.querySelector('.items-finish');

let quantitieTodos = 0;

form.addEventListener('submit', event => {
    event.preventDefault();
    const inputValue = event.target.addTodo.value;

    listTodos.innerHTML += `<div class="item">
    <input class="checkbox" type="checkbox">
    <h4 class="item-list">${inputValue}</h4>
    </div>`;

    quantitieTodos += 1;

    itemsTodos.innerHTML = `<li class="items-todos">${quantitieTodos} items restantes</li>`;
});


clearTodos.addEventListener('click', () => {
    listTodos.innerHTML = '';

    itemsTodos.innerHTML = `<li class="items-todos">0 items restantes</li>`
});


listTodos.addEventListener('click', event => {
    const btnCheckclicked = event.target.className;
    console.log(`Clicou no item ${event.target.className}`);

    if(btnCheckclicked === 'checkbox') {
       const checkBoxCliked = event.target.parentElement;
       checkBoxCliked.setAttribute('value', 'finish');

       quantitieTodos -= 1;

       itemsTodos.innerHTML = `<li class="items-todos">${quantitieTodos < 1 ? 0 : quantitieTodos} items restantes</li>`;
    }
});


btnFinished.addEventListener('click', event => {
    const itemTodo = document.querySelector('.item');
    console.log(itemTodo.getAttribute('value'));
 
    if(itemTodo.getAttribute('value') === 'finish') {
        
    }
});