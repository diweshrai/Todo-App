{/* <div class="todo-item">
        <p class="todo-text"> Hi how Are you</p>
        <button id="edit-button">Edit</button>
        <button id="del-button">Delete</button>


    </div> */}



const mytext = document.querySelector('#mytext');

const addbutton = document.querySelector('#add-button');

const outputside = document.querySelector('.output');


addbutton.addEventListener('click', ()=>{

    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    outputside.appendChild(todoItem);

    const todotext = document.createElement('p');
    todotext.classList.add('todo-text');
    todotext.innerHTML = mytext.value;
    todoItem.appendChild(todotext);

    


    const  editButton = document.createElement('button');
    editButton.id = 'edit-button';
    editButton.textContent= "Edit";
    todoItem.appendChild(editButton);

    
    const  delButton = document.createElement('button');
        delButton.id = 'del-button';
        delButton.textContent= "Delete";
    todoItem.appendChild(delButton);


    
    const  Completed = document.createElement('button');
        Completed.id = 'complete';
        Completed.textContent= "Complete";
    todoItem.appendChild(Completed);


    var today = new Date().toLocaleDateString();
    
    
    var full = `Created on ${today} `;

    const date = document.createElement('p');
    date.classList.add('complete');
    date.innerHTML = full;
    todoItem.appendChild(date);

    


    Completed.addEventListener('click',()=>{
        todotext.classList.add('todotext');
        Completed.innerHTML="Task Completed"
        editButton.setAttribute("disabled", "disabled");

    });

    editButton.addEventListener('click',()=>{
        mytext.value = todotext.innerText;
        const parent = editButton.parentElement;
        parent.parentElement.removeChild(parent);
        
    });


    delButton.addEventListener('click' , ()=>{
        const parent = delButton.parentElement;
        parent.parentElement.removeChild(parent);

    });

    

mytext.value= "";

})

window.onload = function() {
    document.getElementById("mytext").focus();
  } 