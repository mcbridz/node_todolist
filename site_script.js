//set event listenters that use functions for things
//start by setting up on-site load of existing todos

let data = [
    // {
    // 'todo': 'abc',
    // 'priority': 'low',
    // 'dateAdded': '4/21/21',
    // 'completed': false
    // }
]
let todo_items = document.querySelector("#todo_items")
let body = document.querySelector('body')
// function getTodos() {
//     var xhttp = new XMLHttpRequest()
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             data = JSON.parse(this.responseText)
//         } else {
//             console.log('An error has occurred')
//         }
//     }
//     xhttp.open("GET", "http://localhost:5000/getTodos")
//     xhttp.send()
// }


function mark_complete(index) {
    return () => {
        if (data[index].completed) {
            data[index].completed = false
            data[index].completed_str = "false"
        } else {
            data[index].completed = true
            data[index].completed_str = "true"

        }
        // (data[index].completed) ? data[index].completed = false : data[index].completed = true
        display_todos()
    }
}
function display_todos() {
    todo_items.innerHTML = ""
    console.log("current data is:")
    console.log(data)
    for (let i = 0; i < data.length; ++i) {
        let newDiv = document.createElement("div")
        newDiv.id = `todo${i}`
        let newTodo = {
            'todo': data[i].todo,
            'priority': data[i].priority,
            'dateAdded': data[i].dateAdded,
            'completed': data[i].completed,
            'completed_str': data[i].completed_str
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


let submit = document.querySelector('#submit')
function newTodo(callback) {
    console.log('button pushed!')
    let todo = document.querySelector('#input').value
    let priority = document.querySelector('#input_priority').value
    let date = new Date()
    date = `${date.getDate().toString()}/${(date.getMonth() + 1).toString()}/${(date.getFullYear() % 2000).toString()}`
    data.push({
        'todo': todo,
        'priority': priority,
        'dateAdded': date,
        'completed_str': 'False',
        'completed': false
    })
    callback()
}
body.onload = display_todos()