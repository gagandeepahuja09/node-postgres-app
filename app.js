const express = require('express')
const bodyParser = require('body-parser')
const toDoItem = require('./models/toDoItem')
const toDoController = require('./controllers/toDoController')
const app = express()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(bodyParser.json())

// For point 2, use query params
app.get('/todos', toDoController.getTodos)
app.get('/todos/:title', toDoController.getTodoByTitle)
app.post('/todos', toDoController.createTodo)
app.put('/users/:id', toDoController.updateUser)
app.delete('/users/:id', toDoController.deleteUser)
// Point 3, prioritize the todos, show incompleted todos before the completed todos 

module.exports = app