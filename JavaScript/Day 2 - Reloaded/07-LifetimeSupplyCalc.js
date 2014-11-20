function calcSupply(age, maxAge, food, foodPerDay){
    return (((maxAge-age)*foodPerDay)*365+'kg of '+food+' should be enough until I am '+maxAge+' years old.');
}//Screw leap years... Not doing it. Better a kilo short than 50 lines of code! Go on a diet...
calcSupply(38, 118, 'chocolate', 0.5)