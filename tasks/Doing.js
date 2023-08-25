const Sequelize = require("sequelize");
const connection = require("../db/connection");
const Tag = require("../tags/Tag")
const TagDoing = require("../tags/TagDoing")


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

Tag.belongsToMany(Doing, {through: TagDoing, foreignKey: 'tagId'})
Doing.belongsToMany(Tag, {through: TagDoing, foreignKey: 'doingId'})
Doing.hasMany(TagDoing)
Tag.hasMany(TagDoing)
TagDoing.belongsTo(Tag)
TagDoing.belongsTo(Doing)

module.exports = Doing;
