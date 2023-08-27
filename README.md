# API-Kanban

 API-Kanban é uma api criada com o intuito de integrar o projeto [Kanban](https://github.com/raiane-oliveira/Kanban) ao banco de dados.

 # Rotas da API

## Lista de Do's
 https://api-kanban.up.railway.app/todo

 ## Lsita de Doing's
 https://api-kanban.up.railway.app/doing

 ## Lista de Done's
 https://api-kanban.up.railway.app/done

 ## Lista de Tag's
 https://api-kanban.up.railway.app/tag

 #
 ## **Observações**: 
 - Para adicionar novas tarefas ou tags é preciso uma senha!
 - Tudo que for ser adicionado deve ser passado pelo body
 #
  ## Adicionar nova Tag
 https://api-kanban.up.railway.app/"senha"/new/tag

  ## Adicionar novo To Do
 https://api-kanban.up.railway.app/"senha"/new/todo

  ## Adicionar novo Doing
 https://api-kanban.up.railway.app/"senha"/new/doing

  ## Adicionar novo Done
 https://api-kanban.up.railway.app/"senha"/new/done

  ## Relacionar tag com tarefa
  1. Primeira Passo: colocar a senha da rota: https://api-kanban.up.railway.app/"senha"/ <br>
  1. Segundo Passo: colocar qual é o tipo de task e id da task. <br>
     - Se for "To Do" e o id for "1" a rota será: https://api-kanban.up.railway.app/"senha"/add/tag/todo/1
     - Se for "Doing" e o id for "2" a rota será: https://api-kanban.up.railway.app/"senha"/add/tag/doing/2
     - Se for "Done" e o id for "3" a rota será: https://api-kanban.up.railway.app/"senha"/add/tag/done/3
  1. Terceiro Passo: colocar tag da task:
     - Se a task for "To Do" e tag for "10" a rota será: https://api-kanban.up.railway.app/"senha"/add/tag/todo/"idTask"/10
     - Se a task for "Doing" e tag for "11" a rota será: https://api-kanban.up.railway.app/"senha"/add/tag/doing/"idTask"/11
     - Se a task for "Done" e tag for "12" a rota será: https://api-kanban.up.railway.app/"senha"/add/tag/done/"idTask"/12 <br>
 Pronto!
