const express = require("express");
const app = express();
const connection = require("./db/connection");
const bodyParser = require('body-parser')
const ejs = require('ejs')

const Doing = require("./tasks/Doing");
const ToDo = require("./tasks/ToDo");
const Done = require("./tasks/Done");
const Tag = require("./tags/Tag");


// Database
// const tags = Tag.findAll();
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
app.get('/', async (req,res) => {

    res.render('./index',)
})

app.get('/new/todo', async (req,res) => {
    const tags = await Tag.findAll();
    res.render('./new/toDo',{tags: tags})
})

app.post('/save/toDo', async (req,res) => {

    const tagTitle = '';
    const toDo = req.body;

    const tag = await Tag.findAll({
        where: {
            id: toDo.tag
        }
    })

    toDo.tag.forEach(e => {
        console.log(tag.find(element => element == e))
    });
    console.log(toDo.tag)


    res.render('./',{toDo: toDo})
})




// Connection
app.listen("8080",(err) => {
    if(err){
        console.log(err);
    }else{
        console.log("rodando");
    }
})