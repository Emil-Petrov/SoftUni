<?php
error_reporting(0);
$year = date('Y');
$month = date('m');
for ($day = 1; $day <= 31; $day++){

    if(checkdate($month, $day, $year)){

    if (date('l', strtotime("$year-$month-$day")) == 'Sunday'){
            echo date('jS F, Y', strtotime("$year-$month-$day")) . '<br/>';
        }
    }

}