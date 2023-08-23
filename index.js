const express = require("express");
const app = express();
const connection = require("./db/connection");
const bodyParser = require('body-parser')
const ejs = require('ejs')


async function main() {await connection.sync() }

//const Doing = require("./tasks/Doing");
const ToDo = require("./tasks/ToDo");
//const Done = require("./tasks/Done");
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

app.post("/tag/:name",async (req, res) => {
    let name = req.params.name;
    await Tag.create({
        name: name
    })
    res.json(`Tag ${name} criada com sucesso`)
});

app.post("/todo/:title/:description",async (req, res) => {
    let title = req.params.title;
    let description = req.params.description;
    await ToDo.create({
        title: title,
        description: description
    })
    res.json(`Tarefa: ${title} e Descrição: ${description}
    Criada com sucesso!`)
});

app.post("/addTag",async (req,res) => {
    let tag1 = parseInt(req.params.tag1);
    let tag2 = parseInt(req.params.tag2);
    let todo = parseInt(req.params.todo);

    let tagId1 = await Tag.findByPk(tag1)
    let tagId2 = await Tag.findByPk(tag2)
    let toDoId = await ToDo.findByPk(todo)

    await toDoId.addTags([tagId1,tagId2]);
    res.json("Acho que deu certo kk");
})

app.get("/todo/:toDoId",async (req,res) => {
    const toDoId = parseInt(req.params.toDoId);

    const results = await ToDo.findByPk(toDoId,{
        include:[{
            include: [Tag]
        }]
    });

    res.json(results)

})



// Connection
app.listen("8080",(err) => {
    if(err){
        console.log(err);
    }else{
        console.log("rodando");
    }
})
