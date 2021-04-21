//set event listenters that use functions for things
//start by setting up on-site load of existing todos
const spa = require('./utils/spa')

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
body.onload = spa.display_todos()