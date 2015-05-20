function add(x, y) {
    return x + y;
}

function addOne(x) {
    return x + 1;
}

function square(x) {
    return x * x;
}

function compose(f, g){

    function composedFunction(){
        var value = g(arguments[0], arguments[1]);
        return f(value);
    }

    return composedFunction;
}