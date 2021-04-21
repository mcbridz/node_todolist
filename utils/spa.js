function setEmpty() {
    let todo_store = document.querySelector('#todosJSON')
    todo_store.innerText = JSON.stringify([])
}
function mark_complete(index) {
    return () => {
        let todo_store = document.querySelector('#todosJSON')
        let todosJSON = JSON.parse(todo_store.innerText)
        if (todosJSON[index].completed) {
            todosJSON[index].completed = false
            todosJSON[index].completed_str = "false"
        } else {
            todosJSON[index].completed = true
            todosJSON[index].completed_str = "true"
        }
        todo_store.innerText = JSON.stringify(todosJSON)
        display_todos()
    }
}
function display_todos() {
    let todo_items = document.querySelector("#todo_items")
    let todosJSON = JSON.parse(document.querySelector('#todosJSON').innerText)
    todo_items.innerText = ""
    console.log("current data is:")
    console.log(todosJSON)
    for (let i = 0; i < todosJSON.length; ++i) {
        let newDiv = document.createElement("div")
        newDiv.id = `todo${i}`
        let newTodo = {
            'todo': todosJSON[i].todo,
            'priority': todosJSON[i].priority,
            'dateAdded': todosJSON[i].dateAdded,
            'completed': todosJSON[i].completed,
            'completed_str': todosJSON[i].completed_str
        }
        let todo_span = document.createElement("span")
        let priority_span = document.createElement("span")
        let date_span = document.createElement("span")
        let completed_span = document.createElement("span")
        let completed_btn = document.createElement("button")
        todo_span.innerText = newTodo.todo
        priority_span.innerText = newTodo.priority
        date_span.innerText = newTodo.dateAdded
        completed_span.innerText = newTodo.completed_str
        completed_btn.innerText = "Mark (un)complete"
        completed_btn.onclick = mark_complete(i)
        newDiv.appendChild(todo_span)
        newDiv.appendChild(priority_span)
        newDiv.appendChild(date_span)
        newDiv.appendChild(completed_span)
        newDiv.appendChild(completed_btn)
        todo_items.appendChild(newDiv)
    }
}
function newTodo(callback) {
    console.log('button pushed!')
    let todo_store = document.querySelector('#todosJSON')
    let todosJSON = JSON.parse(todo_store.innerText)
    let todo = document.querySelector('#input').value
    let priority = document.querySelector('#input_priority').value
    let date = new Date()
    date = `${(date.getMonth() + 1).toString()}/${date.getDate().toString()}/${(date.getFullYear() % 2000).toString()}`
    console.log(todosJSON)
    todosJSON.push({
        'todo': todo,
        'priority': priority,
        'dateAdded': date,
        'completed_str': 'False',
        'completed': false
    })
    todo_store.innerText = JSON.stringify(todosJSON)
    callback()
}
module.exports = { setEmpty, newTodo, display_todos, mark_complete }