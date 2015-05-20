function findMinAndMax(arr){
    function sortNumber(a,b) {
        return a - b;
    }
    arr.sort(sortNumber);
    console.log('Min: ' + arr[0] +'\nMax: '+arr[arr.length-1]);
}
findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);