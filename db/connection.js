const Sequelize = require('sequelize');
require('dotenv').config()
const db_user = process.env.DB_USER
const db_pass = process.env.DB_PASS

const connection = new Sequelize('api-kanban',db_user,db_pass, {
    host: "aws.connect.psdb.cloud",
    dialect: "mysql",
    dialectOptions: {
        ssl: {
            required: true
        }
    }
})

module.exports = connection;