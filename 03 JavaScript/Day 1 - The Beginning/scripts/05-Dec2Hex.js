while(true){
    var input = prompt('To stop the loop enter something that is not a number!\nEnter Decimal Value: ');
    if (isNaN(input)){
        break;
    }
    alert('To stop the loop enter something that is not a number!\n' +'The hex value of: ' + input + ' is ' + parseInt(input).toString(16).toUpperCase());
}