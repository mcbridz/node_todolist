//set event listenters that use functions for things
//start by setting up on-site load of existing todos
const spa = require('./utils/spa')
let filter_status = { 'completed': false, 'incompleted': false }
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





body.onload = spa.setEmpty()
let submit = document.querySelector('#submit')
submit.onclick = () => spa.newTodo(spa.display_todos)
let filter_out_completed = document.querySelector('#filter_out_completed')
filter_out_completed.onclick = () => {
    if (!filter_status.completed) {
        filter_status.completed = true
        return spa.filter_out_completed(spa.display_todos)
    } else {
        filter_status.completed = false
        return spa.unfilter_completed(spa.display_todos)
    }
}
let filter_out_incompleted = document.querySelector('#filter_out_incompleted')
filter_out_incompleted.onclick = (filter_status) => {
    if (!filter_status.incompleted) {
        filter_status.incompleted = true
        return spa.filter_out_incompleted(spa.display_todos)
    } else {
        filter_status.incompleted = false
        return spa.unfilter_incompleted(spa.display_todos)
    }
}
body.onload = spa.display_todos()