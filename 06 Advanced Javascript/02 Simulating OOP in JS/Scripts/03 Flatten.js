Array.prototype.flatten = function(){
    var i, iterations, output;
    output = [];
    flatten(this);
    return output;

    function flatten(array){
        iterations = array.length;
        for (i = 0; i < iterations; i+=1){
            if (array[i] instanceof Array){
                flatten(array[i]);
            }else{
                output.push(array[i]);
            }
        }
    }
};