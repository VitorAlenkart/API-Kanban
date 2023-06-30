const Sequelize = require("sequelize");
const connection = require("../db/connection");

const Tag = connection.define('Tag',{
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    Sequelize, modelName: 'tag'
});



module.exports = Tag;