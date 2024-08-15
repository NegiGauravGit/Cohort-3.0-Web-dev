const fs = require("fs");

function readFilePromisified(fileName) {
  return new Promise(function(resolve){
    fs.readFile(fileName,"utf-8",function(err,data){
      if(err){
        reject(err);
      }
      resolve(data);
    })
  })
}
//expensive function that make the thread busy like timmy chopping vegetable and 
//simmy was done with taking the katchup but still waiting for the compeletion of timmy work
let a = 0;
for(let i = 0; i < 10000000000; i++) {
    a++;
}
function printData(data){
    console.log(data);
}
// async function main(){
//     try{
//         const data = await readFilePromisified("impFile.txt");
//         console.log(data);
//     }
//     catch(err){
//         console.error("error reading the file")
//     }
// }
// main();

//alternative way to do same without using async await
readFilePromisified("imp.txt").then(printData)
