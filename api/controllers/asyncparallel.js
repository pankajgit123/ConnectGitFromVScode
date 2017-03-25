var async = require('async');

var stack = [];
module.exports =
{getme: getme}

var function1 = function(callback){
    callback(null, "First function return");
}

var function2 = function(callback){
    var element;
    for (var index = 0; index < 100000; index++) {
         element = index;;        
    }
    callback(null, "Second function return" + element);
}

var function3 = function(callback){
    callback(null, "Third function return");
}

function getme(callback)
{
stack.push(function1);
stack.push(function3);
stack.push(function2);


async.parallel(stack, function(err, res){
    if(err)
    {callback(err);}
    else{
    callback(null, res);}
});

console.log('called before');
}