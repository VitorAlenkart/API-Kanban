const Sequelize = require("sequelize");
const connection = require("../db/connection");


const TagDone = connection.define('TagDone',{
    tagId: {
        type: Sequelize.INTEGER
    },
    doneId: {
        type: Sequelize.INTEGER

    }
});

module.exports = TagDone;