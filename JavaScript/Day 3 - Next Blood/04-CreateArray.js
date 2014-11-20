function createArray(arr){
    for (var num in arr){
        console.log(arr[num]*5);
    }
}
createArray([1,2,3,4,5,6,7]);