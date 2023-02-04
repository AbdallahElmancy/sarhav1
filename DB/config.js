const mongoose = require('mongoose');

const runConnection= ()=>{
 return mongoose.connect("mongodb://localhost:27017/saraha").then((res)=>{
    console.log("run");
 }).catch((error)=>{
    console.log(error);
 })
}


module.exports = runConnection