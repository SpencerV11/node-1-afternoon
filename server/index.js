let express = require('express')
let bodyParcer = require('body-parser')
let app = express()
let mc = require('./controller/messages_controller')

app.use(bodyParcer.json())

app.post('/api/messages', mc.create)
app.get('/api/messages', mc.read)
app.put('/api/messages/:id', mc.update)
app.delete('/api/messages/:id', mc.delete)

let PORT = 3001
app.listen(PORT, console.log("Your port is running on :" + PORT))