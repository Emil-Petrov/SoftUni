var i, iterations, thisCurrentChar, argumentsCurrentChar, output;

/* I just realised I could have done this with regex
**  and saved myself a lot of time and performance by doing so. Ah fk it.
**/
String.prototype.startsWith = function(string, caseInsensitive){
    output = true;
    iterations = string.length;
    for (i = 0; i < iterations; i+=1){
        thisCurrentChar = this[i];
        argumentsCurrentChar = string[i];
        if (caseInsensitive){
            thisCurrentChar = thisCurrentChar.toLowerCase();
            argumentsCurrentChar = argumentsCurrentChar.toLowerCase();
        }
        if (thisCurrentChar !== argumentsCurrentChar){
            output = false;
        }
    }
    return output;
};
String.prototype.endsWith = function(string, caseInsensitive){
    output = true;
    iterations = string.length;
    for (i = 0; i < iterations; i += 1){
        thisCurrentChar = this[this.length - 1 - i];
        argumentsCurrentChar =  string[string.length-i-1];
        if (caseInsensitive){
            thisCurrentChar = thisCurrentChar.toLowerCase();
            argumentsCurrentChar = argumentsCurrentChar.toLowerCase();
        }
        if (thisCurrentChar !== argumentsCurrentChar){
            output = false;
        }
    }
    return output;
};
String.prototype.left = function(count){
    if (count > this.length){
        return this.toString();
    }
    output = '';
    iterations = count;
    for (i = 0; i < count; i+=1){
        thisCurrentChar = this[i];
        output += thisCurrentChar;
    }
    return output;
};
String.prototype.right = function(count){
    if (count > this.length){
        return this.toString();
    }
    output = '';
    iterations = count;
    for (i = iterations; i > 0; i -= 1){
        thisCurrentChar = this[this.length-i];
        output += thisCurrentChar;
    }
    return output;
};
String.prototype.padLeft = function(count, character){
    output = '';
    iterations = count;
    if (!character){
        character = ' ';
    }

    for (i = 0; i < iterations; i += 1){
        output += character;
    }

    return output + this.toString();
};
String.prototype.padRight = function(count, character){
    output = '';
    iterations = count;
    if (!character){
        character = ' ';
    }
    for (i = 0; i < iterations; i += 1){
        output += character;
    }
    return this.toString() + output;
};
String.prototype.repeat = function(count){
    output = '';
    iterations = count;
    for (i = 0; i < iterations; i+=1){
        output += this;
    }
    return output;
};