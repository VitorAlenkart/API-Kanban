const express = require("express");
const app = express();
const connection = require("./database/connection");
const bodyParser = require('body-parser')
const ejs = require('ejs')

const Doing = require("./tasks/Doing");
const ToDo = require("./tasks/ToDo");
const Done = require("./tasks/Done");
const Tag = require("./tags/Tag");


// Database
const tags = Tag.findAll();
// console.log(tags)




// View Engine 
app.set("views","./views")
app.set('view engine', 'ejs');


// Set body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// connection
    connection
        .authenticate()
        .then(() => {
            console.log("Conectado com o banco de dados")
        }).catch((err) => {
            console.log(err)
        })


// Routes
app.get('/', (req,res) => {
    res.render('./index')
})


// Connection
app.listen("8080",(err) => {
    if(err){
        console.log(err);
    }else{
        console.log("rodando");
    }
})