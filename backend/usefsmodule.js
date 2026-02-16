const fs = require('fs');
const fs1=require('fs').promises;
function datawrite(){
    try{
        fs1.writeFile('data.txt','hello world, welcome to nodejs file system module');
        // console.log("file created successfully");
        return "file created successfully";
    }
    catch(err){
        console.log(err);
    }

}
function dataread(){
    let statusmsg;
    try{
        
        const fileData=fs.readFileSync('data.txt','utf-8');
        statusmsg=fileData;
        
    }
    catch(err){
        statusmsg=err;
    }
    return fileData;
}
function dataDelete(){
    let statusmsg;
    try{
        fs.unlinkSync('data.txt');
        statusmsg="File deleted successfully";
    }
    catch(err){
        statusmsg=err;
    }
    return statusmsg;
}
module.exports={datawrite,dataread,dataDelete};