const http = require('http')
const port = 5000
const jsonManagement = require('./utils/jsonManagement')
http.createServer((req, res) => {
    let path = new URL(`http://localhost:${port}${req.url}`)
    let body = []
    req.on('data', chunk => {
        body.push(chunk)
    })
    req.on('end', () => {
        body = Buffer.concat(body).toString()
        if (req.method === 'GET') {
            if (path.pathname === '/getTodos') {
                //module function for packaging data
                jsonManagement.getTodos((data) => {
                    res.end(data)
                })
            } else if (path.pathname === '/markDone') {
                //module function for marking todo item in json as done (if done, un-done)
            }
        } else if (req.method === 'POST') {
            if (path.pathname === '/new_todo') {
                let todo = JSON.parse(body)
                //module function for adding todo
            }
        }
    })
}).listen(port)