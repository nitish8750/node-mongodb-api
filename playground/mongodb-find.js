// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if(err){
       return console.log("Unable to connect with mongo db") 
    }
    console.log("Connected to db");

// db.collection('Todos').find({
//     "_id": new ObjectID("59c13e60308f12160809ddd9")
// }).toArray({
//     age:23
// }).then((result)=>{
//         console.log(JSON.stringify(result,undefined,2));
// },(err)=>{
//     console.log(err);
// })
//     db.close();
// });

db.collection('Todos').find().count().then((result)=>{
        console.log(`todoapp: ${result}`);
},(err)=>{
    console.log(err);
})
    db.close();
});