@printClassName()
class Hello{
    constructor(){
        console.log("init");
    }

    print(){
        console.log(new Date());
    }
}


function printClassName(){
    return function(target:Function){
        console.log(target.prototype.constructor.name);
    }
}