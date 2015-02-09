function findLargestBySumOfDigits(arr){
    var maxSum = 0;
    var maxNum = '';
    for (var num in arr){
        var currentNum = arr[num].toString().replace(/\D+/g,'').split('');
        var currentSum = 0
        for (var digit in currentNum){
            currentSum += Number(currentNum[digit]);
        }
        if(currentSum > maxSum){
            maxSum = currentSum;
            maxNum = arr[num];
        }
    }
    if (maxNum==''){
        console.log(undefined);
    }else{
        console.log(maxNum);
    }
}
findLargestBySumOfDigits([33, 44, -99, 0, 20]);