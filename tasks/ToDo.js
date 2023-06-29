const Sequelize = require("sequelize");
const connection = require("../database/connection");
const Tag = require("../tags/Tag")


const ToDo = connection.define('ToDo',{
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    tags: {
        type: Sequelize.STRING
    },
    hexColor: {
        type: Sequelize.STRING
    }
});

ToDo.hasMany(Tag);




module.exports = ToDo;
