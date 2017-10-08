var express = require('express');
var parser = require('body-parser');

var {todoApp} = require('./models/todo');
var {userApp}= require('./models/user');
var {mongoose}= require('./db/mongoose');


var app = express();

app.use(parser.json());

app.post('/todos',(request,response)=>{
    debugger;
    console.log(request.body);

    var todo = new todoApp({
        text: ' '
    });

    todo.save().then((doc)=>{
        response.send(doc);
    },(err)=>{
        response.status(400).send(err);
    });
})

app.listen(3000, ()=>{
    console.log('listened');
});



