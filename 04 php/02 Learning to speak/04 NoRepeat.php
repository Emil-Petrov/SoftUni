<?php
$i = 1234;


for ($num = 100; $num <= $i; $num++){

    //used to check if number has repeating chars
    $isUnique = true;

    for ($fIndex = 0; $fIndex < strlen(strval($num)); $fIndex++){

        for ($sIndex = $fIndex+1; $sIndex < strlen(strval($num)); $sIndex++){


            //If chars match number is not unique and both loops end to make it faster
            if (strval($num)[$fIndex] == strval($num)[$sIndex]){
                $isUnique = false;
                break;
            }

        }
        if (!$isUnique){
            break;
        }
    }


    //If number is unique print on newline
    if ($isUnique){
        echo $num . '<br/>';
    }

}