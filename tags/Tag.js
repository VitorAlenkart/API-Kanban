const Sequelize = require("sequelize");
const connection = require("../database/connection");

const Tag = connection.define('Tag',{
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


module.exports = Tag;