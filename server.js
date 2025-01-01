const express =require ('express')
const app = express
const router= express.Router

//openfile
var fs= require('fs')
fs.open("file.txt",'w',function(err,file){
  if(err) throw err;
  console.log('Saved !')
});


//writefile                //Created file1.txt file and write content
var fs= require('fs')
fs.writeFile("file1.txt",'hello krishma',function(err){
  if(err) throw err;
  console.log('Saved !')
});


//appendfile
var fs = require('fs');

fs.appendFile('file1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
})

//delete file
var fs = require('fs');

fs.unlink('file.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});





