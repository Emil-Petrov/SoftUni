var hpFromKw = function(kw){
    var hp = (kw*1.34102209);
    return (parseFloat(hp).toFixed(2));
}
hpFromKw(75);
hpFromKw(150);
hpFromKw(1000);
