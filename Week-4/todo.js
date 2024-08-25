const fs = require('fs')
const {Command} = require('commander')
const program = new Command;


program
   .name('TodoList')
   .description('CLI to do some todo operations')
   .version('6.3.0');

program.command('addTodos')
   .description('add new tasks')
   .argument('<file>','the task that they want to add')
   .argument('<tasks>','the key here is title or tasks')
   .action((file,tasks) =>{
    fs.readFile(file,"utf-8",function(err,data){
        if(err){
            console.log(err);
        }
        let jsonParseData;
        try{
            jsonParseData = JSON.parse(data);
        }
        catch(parseErr){
            console.error(`Error parsing JSON: ${parseErr}`);
            return;
        }
        const nextId = jsonParseData.tasks.length > 0 ? jsonParseData.tasks[jsonParseData.tasks.length-1].id +1 : 1;

        const newTodos = {
            "id": nextId,
            "tasks" : tasks,
            "completed" : false
        }
        jsonParseData.tasks.push(newTodos)
        const updatedData = JSON.stringify(jsonParseData,null,2);

        fs.writeFile(file,updatedData,function(err){
            if(err){
                console.log(err);
            }
            else {
                console.log(`Successfully added "${tasks}" to ${file}`);
            }
        })
    })
   })
program.command('markItCompleted')
      .description('marks the particular todo completed or not')
      .argument('<file>','the json file where todos are store')
      .argument('<id>','the id associated to particular todo')
      .action((file,id) =>{
        fs.readFile(file,"utf-8",function(err,data){
            if(err){
                console.log(err)
            }
            let jsonParseData;
            try{
                jsonParseData = JSON.parse(data);
            }
            catch(parseErr){
                console.error(`Error parsing JSON: ${parseErr}`);
                return;
            }

            const task= jsonParseData.tasks.find(function(tasks){
                return tasks.id === parseInt(id);
            })

            task.completed = true;
            const updatedData = JSON.stringify(jsonParseData,null,2);
            fs.writeFile(file,updatedData,function(err){
                if(err){
                    console.log(err);
                }
                else {
                    console.log(`Successfully marked task with ID ${id} as completed`);
                }
            })
        })
      })
program.command('deleteTodo')
      .description('deletes the particular todo')
      .argument('<file>','the json file where todos are stored')
      .argument('<id>','the id associated with a particular todo')
      .action((file,id) =>{
        fs.readFile(file,"utf-8",function(err,data){
            if(err){
                console.log(err)
            }
            let jsonParseData;
            try{
                jsonParseData = JSON.parse(data);
            }
            catch(parseErr){
                console.error(`Error parsing JSON: ${parseErr}`);
                return;
            }

            const taskIndex= jsonParseData.tasks.find(function(tasks){
                return tasks.id === parseInt(id);
            })
            
            jsonParseData.tasks.splice(taskIndex,1)
            const updatedData = JSON.stringify(jsonParseData,null,2);
            fs.writeFile(file,updatedData,function(err){
                if(err){
                    console.log(err);
                }
                else {
                    console.log(`Successfully deleted the tasks of  id ${id} `);
                }
            })
        })
      })
program.parse();
