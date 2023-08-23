const Sequelize = require("sequelize");
const connection = require("../db/connection");


const TagToDo = connection.define('TagToDo',{
    tagId: {
        type: Sequelize.INTEGER
    },
    toDoId: {
        type: Sequelize.INTEGER

    }
});

module.exports = TagToDo;