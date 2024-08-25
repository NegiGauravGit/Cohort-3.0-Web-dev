const fs = require('fs');
const {Command} = require('commander');
const program = new Command();

program
    .name('counter')
    .description('CLI to do file based tasks')
    .version('0.8.0');
program.command('count')
    .description('count the number of the sentances')
    .argument('<file>','file to count')
    .action((file) => {
        fs.readFile(file,"utf-8",function(err,data){
            if(err){
                console.log(err)
            }
            else{
                const totalcount = data.split('\n').length;
                console.log(`the total number of sentence in the ${file} is ${totalcount}`);
            }
        });
    });
program.command('countWords')
      .description('count the numberof words in the sentences')
      .argument('<file>','file to count words')
      .action((file) =>{
        fs.readFile(file,"utf-8",function(err,data){
            if(err){
                console.log(err)
            }
            else{
                const totalWordCount = data.split(' ').length;
                console.log(`the number of words in the ${file} is ${totalWordCount}`);
            }
        })
      })
program.command('Edit')
      .description('edits the file')
      .argument('<file>','file that you want to edit')
      .argument('<content>','the edited content that you want to write into the file')
      .action((file,content) =>{
        fs.writeFile(file,content,function(err) {
            if(err){
                console.log(err);
            }
            else{
                console.log(`the file has been editied ${content}`)
            }
        })
      })
program.parse();