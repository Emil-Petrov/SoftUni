<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<form method="POST">

    <input type="text" name="input"/>
    <input type="submit" name="submit"/>

</form>

<div>
    <?php

        //Get all entries
        $entries = preg_split('/[, ]+/',$_POST['input']);

        //Initialise array to hold key > repeat value;
        $frequencies = [];

        foreach ($entries as $entry){


            //If arrray holds key increase value by 1. Else add key with value of 1
            if (array_key_exists($entry, $frequencies)){

                $frequencies["$entry"] +=1;

            }else {

                $frequencies["$entry"] = 1;

            }

        }
    //Sort array by value from high to low
    arsort($frequencies, SORT_NUMERIC);

    //For each key in the array print key : N times.
    foreach (array_keys($frequencies) as $key){

        echo " $key : $frequencies[$key] times <br/>";

    }
    ?>
</div>
</body>
</html>