const addToDo = document.getElementById('addBtn');
const user = document.getElementById('userInput');
const myList = document.getElementById('theList');

addToDo.addEventListener('click', event => {
  event.preventDefault();
  const newInput = user.value;
  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  let label = document.createElement('label');
  label.appendChild(document.createTextNode(newInput));
  let newToDo = document.createElement('li');
  newToDo.appendChild(checkbox);
  newToDo.appendChild(label);
  myList.appendChild(newToDo);
});
const removeToDo = document.getElementById('removeBtn');
removeToDo.addEventListener('click',(event => {
    event.preventDefault();
    let lastToDo = myList.lastChild;
    myList.removeChild(lastToDo);
}))

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];



function addToStorage(event) {
    event.preventDefault();
    const task = {
        id: Date.now(),
        text: newInput.value,
        completed: false,
    };
    tasks.push[task];
    localStorage.setItem('tasks',JSON.stringify(tasks));
    newInput.value = '';

    // renderTasks();
}



// function renderTasks() {
//     myList.innerHTML = '';
//     for(let i =0;i< tasks.length; i++) {
//         const task = tasks [i];
//         const li = document.createElement('li');
//         li.innerHTML = 
//         <label></label>
//     }
// }



addToDo.addEventListener('click',addToStorage)



