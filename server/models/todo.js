var  {mongoose}   = require('../db/mongoose');

var todoApp = mongoose.model('todo',{
    text : {
        type: 'String',
        required : true,
       // minlength : 1,
        trim : true
    },
    completed: {
        type: Boolean
    },
    completedTo : {
        type: Number
    }
});

module.exports = {todoApp}