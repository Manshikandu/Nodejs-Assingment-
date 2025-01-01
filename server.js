// const express= require ('express');
// const app= express()
// const router = express.Router();

// router.get('/',function(req,res,next){
// console.log('hello world')
// res.end()

// })

// app.use(router)

// app.listen(8000,function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("server run on port 8000")
//     }
// })

// const express = require ('express')
// const app = express()
// const router = express.Router()
// const path = require("path");
// const port = 8000;




// router.get('/', function(req, res,next) {
//   res.sendFile(path.join(__dirname, 'index.html'));
// })

// app.use(router);


// app.listen(port, function(err){
//     if(err){
//                 console.log(err)
//             }
//             else{
//                 console.log("server run on port 8000")
//             }
// });
const express =require ('express')
const app = express
const router= express.Router
//openfile
var fs= require('fs')
fs.open("file.txt",'w',function(err,file){
  if(err) throw err;
  console.log('Saved !')
});


//writefile
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





