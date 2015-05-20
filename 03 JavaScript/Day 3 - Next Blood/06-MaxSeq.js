function findMaxSeq(arr){
    var maxVal = 1;
    var maxSeq = arr[0];
    var currentSeq = arr[0];
    var currentVal = 1;
    for (var i = 1; i < arr.length; i++){
        if (arr[i]==arr[i-1]){
            currentVal++;
            currentSeq+=', '+arr[i];
            if (currentVal >= maxVal){
                maxVal = currentVal;
                maxSeq = currentSeq;
            }
        }else{
            currentVal = 1;
            currentSeq = arr[i];
        }
    }
    console.log(maxSeq);
}
findMaxSeq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);