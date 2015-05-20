var i, iterations;
function printArgsInfo(){
    iterations = arguments.length;
    for (i = 0; i < iterations; i += 1){
        this.objectType = Object.prototype.toString.call(arguments[i]).split(/\W/)[2];
        console.log(arguments[i] + " (" + this.objectType+")");
    }
}