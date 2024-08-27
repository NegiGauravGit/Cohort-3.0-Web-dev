const fs = require('fs')
const express = require('express')
const app = express();

app.use(express.json()); 

function readFileContent(file){
    return new Promise(function(resolve,reject){
        fs.readFile(file,function(err,data){ 
            if(err){
                console.log(err)
            }
            let jsonParseData;
            try{
                jsonParseData = JSON.parse(data);
                resolve(jsonParseData);
            }catch(parseErr){
                console.log(`Error parsing JSON: ${parseErr}`);
                return;
            }
        })
    })
}

app.get('/alltodos',async function(req,res){
    try{
        const content = await readFileContent('allTodos.json');
        res.send(content);
    }catch(err){
        res.status(500).send("Error reading the file")
    }
})
app.post('/createTodo',async function(req,res){
    const {title,descrption} = req.body;
    const jsonParseData = await readFileContent("allTodos.json")
        const nextId = jsonParseData.tasks.length > 0 ? jsonParseData.tasks[jsonParseData.tasks.length-1].id +1 : 1;
            const Newcontent = {
                "title": title,
                "descrption": descrption,
                "id": nextId
            }
        jsonParseData.tasks.push(Newcontent);

        const updatedContent = JSON.stringify(jsonParseData,null,2)

        fs.writeFile('allTodos.json',updatedContent,function(err){
            if(err){
                console.log(err)
            }else{
                res.status(200).send("the task in added successfully")
            }
        })
    })
app.delete('/deleteTodo',async function(req,res){
    const {id} = req.body;
    const jsonParseData = await readFileContent("allTodos.json")
    const indx = jsonParseData.tasks.findIndex(function(tasks){
        return tasks.id === id;
    })
    jsonParseData.tasks.splice(indx,1);
    const updatedContent = JSON.stringify(jsonParseData,null,2);
    fs.writeFile("allTodos.json",updatedContent,function(err){
        if(err){
            res.send('error reading file')
        }
        else{
            res.send("the task is deleted successfully")
        }
    })
})
app.put('/updateTodo',async function(req,res){
    const {updatedTitle,updatedDes,id} = req.body;
    const jsonParseData = await readFileContent("allTodos.json")
    const indx = jsonParseData.tasks.findIndex(function(tasks){
        return tasks.id === id;
    })
    jsonParseData.tasks[indx].title = updatedTitle;
    jsonParseData.tasks[indx].descrption = updatedDes;
    const updatedContent = JSON.stringify(jsonParseData,null,2);
    fs.writeFile("allTodos.json",updatedContent,function(err){
        if(err){
            res.send('error reading file')
        }
        else{
            res.send("the task is updated successfully")
        }
    })
})
app.listen(3001);