var turn = 0;

var row1 = 0;
var row2 = 0;
var row3 = 0;
var col1 = 0;
var col2 = 0;
var col3 = 0;
var diag1 = 0;
var diag2 = 0;

var GameOver = false;

function TakeTurn(id){
if (!GameOver) {
    if (document.getElementById(id).style.background == 'rgb(35, 157, 255)' || document.getElementById(id).style.background == 'rgb(255, 51, 51)') {
        if (turn % 2 == 0) {
            alert('You can\'t place and object if the field is already occupied!');

            //document.getElementById("Announcer").innerHTML = 'You can\'t place and object if the field is already occupied!<div></div>Player 1, your turn!';
        }
        else if (turn % 2 != 0) {
            alert('You can\'t place and object if the field is already occupied!');
        }
    }
    else {
        addPoints(id);
        if (turn % 2 == 0) {
            document.getElementById("Announcer").innerHTML = 'Player 2: <span id="p2c"></span> your turn!';
        }
        else if (turn % 2 != 0) {
            document.getElementById("Announcer").innerHTML = 'Player 1: <span id="p1c"></span> your turn!';
        }

        if (turn % 2 == 0) {
            document.getElementById(id).style.background = 'rgb(35, 157, 255)';
        }
        else if (turn % 2 != 0) {
            document.getElementById(id).style.background = 'rgb(255, 51, 51)';
        }
        turn++;
    }
    if (row1 == 6 || row2 == 6 || row3 == 6 || col1 == 6 || col2 == 6 || col3 == 6 || diag1 == 6 || diag2 == 6) {
        document.getElementById("Announcer").innerHTML = 'Player 1, Wins';
        GameOver = true;
    }
    else if (row1 == -6 || row2 == -6 || row3 == -6 || col1 == -6 || col2 == -6 || col3 == -6 || diag1 == -6 || diag2 == -6) {
        document.getElementById("Announcer").innerHTML = 'Player 2, Wins';
        GameOver = true;
    }
    else if (turn == 9) {
        document.getElementById("Announcer").innerHTML = 'TIE';
        GameOver = true;
    }
}
}
function addPoints(id){ //Could have done it with an array but im too stupid.
    if (turn%2==0){
        switch (id){
            case 'cell1':
                row1 +=1;
                col1 +=1;
                diag1 +=1;
                break;
            case 'cell2':
                row1 +=2;
                col2 +=1;
                break;
            case 'cell3':
                row1 +=3;
                col3 +=1;
                diag2 +=1;
                break;

            case 'cell4':
                row2 +=1;
                col1 +=2;
                break;
            case 'cell5':
                row2 +=2;
                col2 +=2;
                diag1 +=2;
                diag2 +=2;
                break;
            case 'cell6':
                row2 +=3;
                col3 +=2;
                break;

            case 'cell7':
                row3 +=1;
                col1 +=3;
                diag2 +=3;
                break;
            case 'cell8':
                row3 +=2;
                col2 +=3;
                break;
            case 'cell9':
                row3 +=3;
                col3 +=3;
                diag1 +=3;
                break;
        }
    }
    else{
        switch (id){
            case 'cell1':
                row1 -=1;
                col1 -=1;
                diag1 -=1;
                break;
            case 'cell2':
                row1 -=2;
                col2 -=1;
                break;
            case 'cell3':
                row1 -=3;
                col3 -=1;
                diag2 -=1;
                break;

            case 'cell4':
                row2 -=1;
                col1 -=2;
                break;
            case 'cell5':
                row2 -=2;
                col2 -=2;
                diag1 -=2;
                diag2 -=2;
                break;
            case 'cell6':
                row2 -=3;
                col3 -=2;
                break;

            case 'cell7':
                row3 -=1;
                col1 -=3;
                diag2 -=3;
                break;
            case 'cell8':
                row3 -=2;
                col2 -=3;
                break;
            case 'cell9':
                row3 -=3;
                col3 -=3;
                diag1 -=3;
                break;
        }
    }
}