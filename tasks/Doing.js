const Sequelize = require("sequelize");
const connection = require("../database/connection");
const Tag = require("../tags/Tag")


const Doing = connection.define('Doing',{
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


Doing.hasMany(Tag);



module.exports = Doing;
