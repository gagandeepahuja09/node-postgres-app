const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'tododata',
    'me',
    'password',
    {
        host: 'localhost',
        dialect: 'postgres',
    },
)

const toDoItem = sequelize.define('toDoItem', {
    title: {    
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    },
    isCompleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

toDoItem.sync({ force: true })

module.exports = toDoItem