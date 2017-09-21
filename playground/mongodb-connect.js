// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if(err){
       return console.log("Unable to connect with mongo db") 
    }
    console.log("Connected to db");

    // db.collection('Todos').insertOne({
    //     'name': 'nigam',
    //     'age': 23
    // },(err,result)=>{
    //      if(err){
    //    return console.log(`Unable to insert data $(err)`) ;
    // }
    // //console.log(JSON.stringify(result.ops,undefined,2));
    // console.log(result.ops[0]._id);
    // });

    db.close();
});
