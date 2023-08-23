const Sequelize = require("sequelize");
const connection = require("../db/connection");
const Tag =  require("../tags/Tag")
const TagToDo =  require("../tags/TagToDo")

const ToDo = connection.define('ToDo',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    hexColor: {
        type: Sequelize.STRING
    }
});

Tag.belongsToMany(ToDo, {through: TagToDo, foreignKey: 'tagId'})
ToDo.belongsToMany(Tag, {through: TagToDo, foreignKey: 'toDoId'})


module.exports = ToDo;
