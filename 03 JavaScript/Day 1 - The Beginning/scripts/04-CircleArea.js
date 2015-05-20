for (var i =0; i<3; i++){
    var number = '';
    if (i==0){
        number=' first ';
    }
    else if (i==1){
        number=' second ';
    }
    else if (i==2){
        number=' third ';
    }
    var radius = prompt('Enter value for'+number+'radius : ');
    var area = radius*radius*Math.PI;
    document.getElementById('output').innerHTML +='r = ' + radius + '; area = ' + area +'<div></div>';
}