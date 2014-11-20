function dBy3 (num){
    if(num<=9){
        console.log('number must be higher than 9 (contain two digits at least)')
    }
    else{
        var total = 0;
        var numArray = num.toString().split('');
        for(var i = 0; i < num.toString().length; i++){
            var popEt = numArray.pop();
            total += parseInt(popEt);
        }
        if(total%3){
            return'the number is not divided by 3 without remainder';
        }
        else{
            return 'the number is divided by 3 without remainder';
        }
    }
}
dBy3(parseInt(prompt('Enter number')));