function receivesAFunction (callback){
    return 'fetching the callback' + callback();
}
function message(){
    return 'this doesnt matter';
}

receivesAFunction(message);


function returnsANamedFunction (){
    return message;
}


function returnsAnAnonymousFunction(a){
    return function(b){
        return a*b;
    }
}