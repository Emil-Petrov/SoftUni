function findMaxSeq(arr){
    var maxVal = 1;
    var maxSeq = arr[0];
    var currentSeq = arr[0];
    var currentVal = 1;
    for (var i = 1; i < arr.length; i++){
        if (arr[i]-1==arr[i-1]){
            currentVal++;
            currentSeq += ''+ arr[i];
            if (currentVal > maxVal){
                maxSeq = currentSeq;
                maxVal=currentVal;
            }
        }else{
            currentSeq = arr[i];
            currentVal = 1;
        }
    }
    if (maxVal == 1){
        return 'No';
    }
    return maxSeq;
}
findMaxSeq([9, 2, 3, 1, 2, 3, 4]);