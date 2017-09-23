// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if(err){
       return console.log("Unable to connect with mongo db") 
    }
    console.log("Connected to db");

//     db.collection('Todos').deleteOne({"completed" : false}).then((result)=>{
//     console.log(result);
// });

 db.collection('Todos').findOneAndDelete({
     _id : new ObjectId("59bab489648f310fd42eb2ed")
    }).then((result)=>{
    console.log(result);
});


});