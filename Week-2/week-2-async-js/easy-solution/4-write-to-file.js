const fs = require("fs");
const content = "vDNHUGDN FNDSJVNWDFNJD JDGVNADIJCNSD vsdnfjvn dshv sfnvjdsnfsaixmnadv sfjjvnfsiuvniusnv sfjnvjifsnvi dsvnjds vhfrrnjivndsjiv ";
function writeFilePromisified(fileName,content){
  return new Promise(function(resolve,reject){
    fs.writeFile(fileName,content,function(err){
      if(err){
        return reject(err);
      }
      console.log("the content in the file is written Succesfully");
      resolve(content);
    })
  })
}
async function main(){
  try{
    const updatedata = await writeFilePromisified("imp.txt",content);
    console.log("after writing in the file the new content looks like")
    console.log(updatedata);
  }
  catch(err){
    console.error("Error:", err);
  }
}
main();
