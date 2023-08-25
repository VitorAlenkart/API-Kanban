const Sequelize = require("sequelize");
const connection = require("../db/connection");


const TagDoing = connection.define('TagDoing',{
    tagId: {
        type: Sequelize.INTEGER
    },
    doingId: {
        type: Sequelize.INTEGER

    }
});

module.exports = TagDoing;