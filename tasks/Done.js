const Sequelize = require("sequelize");
const connection = require("../db/connection");
const Tag = require("../tags/Tag")
const TagDone = require("../tags/TagDone")


const Done = connection.define('Done',{
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

Tag.belongsToMany(Done, {through: TagDone, foreignKey: 'tagId'})
Done.belongsToMany(Tag, {through: TagDone, foreignKey: 'doneId'})
Done.hasMany(TagDone)
Tag.hasMany(TagDone)
TagDone.belongsTo(Tag)
TagDone.belongsTo(Done)

module.exports = Done;
