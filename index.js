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

app.get("/",(req,res) => {
    res.json("Ok")
})

// ADICIONAR NOVA TAG 

app.post("/new/tag",async (req, res) => {
    let data = req.body;
    await Tag.create({
        name: data.name
    })
    res.json(`Tag ${data.name} criada com sucesso`)
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

// ADICIONAR NOVO DOING

app.post("/new/doing",async (req, res) => {
    let data = req.body;
    await Doing.create({
        title: data.title,
        description: data.description
    })
    res.json(`Tarefa: ${data.title} e Descrição: ${data.description}.`)
});

// ADICIONAR NOVO DONE

app.post("/new/done",async (req, res) => {
    let data = req.body;
    await Done.create({
        title: data.title,
        description: data.description
    })
    res.json(`Tarefa: ${data.title} e Descrição: ${data.description}.`)
});

// VER TODOS OS TODO'S

app.get("/todo",async (req,res) => {
    const results = await ToDo.findAll();
    res.json(results)
})

// VER TODOS OS DONE'S

app.get("/done",async (req,res) => {
    const results = await Done.findAll();
    res.json(results)
})

// VER TODOS OS DOING'S

app.get("/doing",async (req,res) => {
    const results = await Doing.findAll();
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

// VER TODOS OS DOING'S E TAG'S RELACIONADAS

app.get("/doing/:doingId",async (req,res) => {
    const doingId = parseInt(req.params.doingId);

    const results = await Doing.findByPk(doingId,{
        include: Tag
    });

    res.json(results)
})

// VER TODOS OS DONE'S E TAG'S RELACIONADAS

app.get("/done/:doneId",async (req,res) => {
    const doneId = parseInt(req.params.doneId);

    const results = await Done.findByPk(doneId,{
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

app.post("/add/tag/:task/:idTask/:idTag",async (req,res) => {
    const idTag = parseInt(req.params.idTag)
    const idTask = parseInt(req.params.idTask)
    const task = req.params.task

    const tag = await Tag.findByPk(idTag)

    if(task === "todo"){

        let toDo = await ToDo.findByPk(idTask,{
            include: Tag
        })

        await toDo.addTags([tag])

        toDo = await ToDo.findByPk(idTask,{
            include: Tag
        })

        res.json(toDo)

    }else if(task === "doing"){

        let doing = await Doing.findByPk(idTask,{
            include: Tag
        })

        await doing.addTags([tag])

        doing = await Doing.findByPk(idTask,{
            include: Tag
        })

        res.json(doing)

    }else if(task === "done"){

        let done = await Done.findByPk(idTask,{
            include: Tag
        })

        await done.addTags([tag])

        done = await Done.findByPk(idTask,{
            include: Tag
        })

        res.json(done)

    }else{
        res.json("Tipo de tarefa não identificado!")
    }


})



// Connection
app.listen("8080",(err) => {
    if(err){
        console.log(err);
    }else{
        console.log("rodando");
    }
})
