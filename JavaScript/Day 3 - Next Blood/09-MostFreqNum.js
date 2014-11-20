function findMostFreq(arr){
    arr.sort(function(a,b){
        return a - b;
    });
    var hFreq = 1;
    var hFreqN = arr[0];
    var cFreq = 1;
    var cFreqN = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i]!=arr[i-1]){
            cFreq = 1;
            cFreqN = arr[i];
        }else{
            cFreq++;
            cFreqN = arr[i];
        }
        if(cFreq > hFreq){
            hFreq = cFreq;
            hFreqN = cFreqN;
        }
    }
    return (hFreqN + ' ('+hFreq+' times)');
}

findMostFreq([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);