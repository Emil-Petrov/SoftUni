var i, iterations, elements, event, func, elementType, domModule, parentType, childType;

domModule = (function domModification() {

    function appendChild() {
        elementType = Object.prototype.toString.call(arguments[0]).split(/\W/)[2];
        parentType = Object.prototype.toString.call(arguments[1]).split(/\W/)[2];
        if (parentType != "String"){
            if (elementType != "String"){
                arguments[1].appendChild(arguments[0]);
            }else{
                arguments[1].appendChild(document.querySelector(arguments[0]));
            }
        }else{
            if (elementType != "String"){
                document.querySelector(arguments[1]).appendChild(arguments[0]);
            }else{
                document.querySelector(arguments[1]).appendChild(document.querySelector(arguments[0]));
            }
        }
    }

    function removeChild(){
        elementType = Object.prototype.toString.call(arguments[0]).split(/\W/)[2];
        childType = Object.prototype.toString.call(arguments[1]).split(/\W/)[2];
        if (childType != "String"){
            if (elementType != "String"){
                arguments[0].removeChild(arguments[1]);
            }else{
                arguments[0].removeChild(document.querySelector(arguments[1]));
            }
        }else{
            if (childType != "String"){
                document.querySelector(arguments[0]).removeChild(arguments[1]);
            }else{
                document.querySelector(arguments[0]).removeChild(document.querySelector(arguments[1]));
            }
        }
    }

    function addHandler(){

        elementType = Object.prototype.toString.call(arguments[0]).split(/\W/)[2];
        event = arguments[1];
        func = arguments[2];

        if (elementType != "String"){
            elements = arguments[0];
        }else{
            elements = document.querySelectorAll(arguments[0]);
        }
        iterations = elements.length;

        for (i = 0; i < iterations; i++){
            elements[i].addEventListener(event, func);
        }
    }

    function retrieveElements(){
        return document.querySelectorAll(arguments[0]);
    }

    return{
        appendChild : appendChild,
        removeChild : removeChild,
        addHandler : addHandler,
        retrieveElements : retrieveElements
    }
})();