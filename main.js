const http = require('http')

const server = http.createServer((req,res)=> {
    res.write('welcome to our website')
    res.end()
})

server.listen(3000)