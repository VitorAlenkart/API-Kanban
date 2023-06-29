const Sequelize = require('sequelize');

const connection = new Sequelize('api-kanban','0x6j14vg93coah1ldxdy','pscale_pw_6DdGKkL6EFMp2qJwYVp9Q9xRxZGEWdBeLalMcbeNJxs', {
    host: "aws.connect.psdb.cloud",
    dialect: "mysql",
    dialectOptions: {
        ssl: {
            required: true
        }
    }
})

module.exports = connection;