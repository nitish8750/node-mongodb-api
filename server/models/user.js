var  {mongoose}   = require('../db/mongoose');

var userApp = mongoose.model('User',{
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

module.exports = {userApp}