function findLargestBySumOfDigits(arr){


    var currentMax = 0;
    var Max = 0;
    var maxIndex;
    for (var entry in arr){
        for(var digit in arr[entry].toString()){
            if(typeof arr[entry][digit] != 'number') {
                break;
            }
            currentMax += digit;
        }
        if (currentMax>Max){
            Max=currentMax;
            maxIndex = entry;
        }
    }
    return arr[maxIndex];
}
findLargestBySumOfDigits([33, 44, -99, 0, 20]);