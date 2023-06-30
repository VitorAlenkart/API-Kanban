const Sequelize = require("sequelize");
const connection = require("../db/connection");
const Tag = require("../tags/Tag")


const Done = connection.define('Done',{
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






module.exports = Done;
