function checkNum(num){
    if (num<=0){
        return;
    }
    for (var i = 0; i < num; i++){
        if(i%4==0 || i%5==0){
        } else{
            console.log(i);
        }
    }
}
checkNum(20);