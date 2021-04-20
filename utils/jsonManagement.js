const fs = require('fs')
const path = require('path')
function getTodos(callback) {
    fs.readFile(path.join(__dirname, '..', 'data', 'data.json'), (err, data) => {
        if (err) throw err
        callback(data)
    })

}


module.exports = { getTodos }