const fs = require('fs');
const express = require('express')
const app =express();

app.use(express.json()); 


const todos = []

app.get('/',function(req,res){
    res.send(todos);
})
app.post('/createTodo',function(req,res){
    const {task,id} = req.body;

    if(!task || !id){
        return res.status(400).send("tasks and id is required")
    }
    todos.push({task,id});
    res.send("the tasks is added  succesfully")
})
app.delete('/deleteTodo', function(req, res) {
    const { id } = req.body;

    if (!id) {
        return res.status(400).send("ID is required");
    }
    
    const indx = todos.findIndex(function(task) {
        return task.id === id;
    });
    
    if (indx !== -1) {
        todos.splice(indx, 1);
        res.send("The task is deleted successfully");
    } else {
        res.status(404).send("Task not found");
    }
});

app.put('/updateTodo',function(req,res){
    const { id, updatedTask } = req.body;

    if (!id) {
        return res.status(400).send("ID is required");
    }
    const indx = todos.findIndex(function(task){
        return task.id === id;
    })

    if(indx !==-1){
        todos[indx].task = updatedTask
        res.send("the task is updated succesfully")
    }else{
        res.status(400).send("task not found")
    }

})
app.listen(3000);