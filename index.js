const express = require("express");
const app = express();
const connection = require("./db/connection");
const bodyParser = require('body-parser')
const ejs = require('ejs')

const Doing = require("./tasks/Doing");
const ToDo = require("./tasks/ToDo");
const Done = require("./tasks/Done");
const Tag = require("./tags/Tag");
const TagToDo = require("./tags/TagToDo")


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

// ADICIONAR NOVA TAG 

app.post("/new/tag/:tag",async (req, res) => {
    let name = req.params.tag;
    await Tag.create({
        name: name
    })
    res.json(`Tag ${name} criada com sucesso`)
});

// ADICIONAR NOVO TODO

app.post("/new/todo",async (req, res) => {
    let data = req.body;
    await ToDo.create({
        title: data.title,
        description: data.description
    })
    res.json(`Tarefa: ${data.title} e Descrição: ${data.description} Criada com sucesso!`)
});

// VER TODOS OS TODO'S

app.get("/todo",async (req,res) => {
    const results = await ToDo.findAll();
    res.json(results)
})

// VER TODAS AS TAG'S

app.get("/tag",async (req,res) => {
    const results = await Tag.findAll();
    res.json(results)
})

// VER TODOS OS TODO'S E TAG'S RELACIONADAS

app.get("/todo/:toDoId",async (req,res) => {
    const toDoId = parseInt(req.params.toDoId);

    const results = await ToDo.findByPk(toDoId,{
        include: Tag
    });

    res.json(results)
})

// VER AS TAG E TODOS OS TODO'S RELACIONADO

app.get("/tag/:tagId",async (req,res) => {
    const tagId = parseInt(req.params.tagId);

    const results = await Tag.findByPk(tagId,{
        include: ToDo
    });

    res.json(results)
})

// RELACIONAR TODO COM UMA TAG

app.post("/add/tag/:idToDo/:idTag",async (req,res) => {
    const idTag = parseInt(req.params.idTag)
    const idToDo = parseInt(req.params.idToDo)

    const tag = await Tag.findByPk(idTag)
    const toDo = await ToDo.findByPk(idToDo,{
        include: [
            {
                model: Tag
            }
        ]
    })

    await toDo.addTags([tag])
    console.log(toDo.dataValues)
    res.json(toDo)
})



// Connection
app.listen("8080",(err) => {
    if(err){
        console.log(err);
    }else{
        console.log("rodando");
    }
})
