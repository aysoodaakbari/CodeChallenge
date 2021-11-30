const form = document.querySelector('#task-form');
const input = document.querySelector('#task-input');
const list = document.querySelector('#tasks');
form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;
        if (task == null) {
            alert("please fill the task input")
            return;
        }
        const task_el = document.createElement('div');
        task_el.classList.add("task");
        const task_contentElement = document.createElement("div");
        task_contentElement.classList.add('content');
        task_contentElement.innerHTML = task;
        const task_actionsElement = document.createElement('div');
        task_actionsElement.classList.add('actions');

        const task_editElement = document.createElement('button');
        task_editElement.classList.add('edit');
        task_editElement.innerText = 'Edit';

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';
        task_el.appendChild(task_actionsElement);

        task_actionsElement.appendChild(task_editElement);
        task_actionsElement.appendChild(task_delete_el);

        task_el.appendChild(task_contentElement);
        list.appendChild(task_el);



    })
    //wifi connection
let el = document.createElement("div");
document.querySelector('header').prepend(el);

window.addEventListener('offline', (event) => {
    el.textContent = 'offline';
    el.className = 'alert';
    el.classList.add('alert-danger')
});
window.addEventListener('online', (event) => {
    el.textContent = 'online';
    el.className = 'alert';
    el.classList.add('alert-danger')
});