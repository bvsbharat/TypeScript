var container = document.getElementById('container');

var todo = {
    id: 123,
    name: "Pick up dry cleaning",
    completed: true
}

container.innerHTML = `
<div todo='$(todo.id)' class="list-group-item"> 
 <i class='${todo.completed}?"hidden":"glyphicon-ok"} text-success glyphicon'></i>
 <span class="name">${todo.name}</span>
`

