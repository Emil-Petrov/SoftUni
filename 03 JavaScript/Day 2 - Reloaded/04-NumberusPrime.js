function prime (number){
    if(number%2==0){
        return false;
    }
    else {
        for (var i = 3; i <= Math.sqrt(number); i += 2) {
            if (number % i == 0) {
                return false
            }
        }
        return true;
    }
}
prime(7);
prime(254);
prime(587);