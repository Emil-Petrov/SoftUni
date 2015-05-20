function soothsayer(arr){
    var result = [];

    function pickRandom (array, res){
        var random = Math.floor(Math.random()*(arr.length-1));
        res.push(array[random]);
    }

    pickRandom(arr[0], result);
    pickRandom(arr[1], result);
    pickRandom(arr[2], result);
    pickRandom(arr[3], result);
    console.log ('You will work ' + result[0] +' years on '+ result[1]+'. You will live in '+ result[2] +' and drive ' +result[3] + ' .');
    result = []; //clear the array for further randomness and use of the function
}

soothsayer([[3, 5, 2, 7, 9], ['Java', 'Python', 'C#', 'JavaScript', 'Ruby'], ['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia'], ['BMW', 'Audi', 'Lada', 'Skoda', 'Opel']])