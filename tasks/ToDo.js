const Sequelize = require("sequelize");
const connection = require("../db/connection");
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
    hexColor: {
        type: Sequelize.STRING
    }
},{

});

ToDo.hasMany(Tag);

ToDo.create({
    title:'Teste 1',

    description:"Opa, primeiro teste do dia...",
    hex: 'a',
        tags: [ 
        {name: 'tag1'},
        {name: 'tag2'},
    ]
},{
    include: [ Tag ]
})



module.exports = ToDo;
