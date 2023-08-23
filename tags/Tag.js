const Sequelize = require("sequelize");
const connection = require("../db/connection");

const Tag = connection.define('Tag',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Tag;