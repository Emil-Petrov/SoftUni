// I cant seem to figure out how to return the number if just the function is called so it has to be invoked with no argument in order for a number to come out...
var num = 0, value , type;
function add(number){
    type  = Object.prototype.toString.call(number).split(/\W/)[2];
    if (type != "Number"){
        value = num;
        num = 0;
        return value;
    }
    num += number;
    return add;
}