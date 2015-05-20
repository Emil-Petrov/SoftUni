function checkBrackets(string){
    var charArray = string.split('');
    var opened = false;
    var closed = false;
    var openBCount = 0;
    var closedBCount = 0;
    for (var i = 0; i < charArray.length; i++){

        if (charArray[i]=='('){
            openBCount++;
            opened = true;
        }else if (charArray[i]==')'){
            closedBCount++;
            if (opened){
                closed = true;
            }
        }
        if (closed){
            opened = false;
            closed = false;
        }
    }
    if (opened == closed && openBCount == closedBCount){
        return 'correct';
    }
    return 'incorrect';
}