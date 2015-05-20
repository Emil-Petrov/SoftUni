<?php
$name = 'Gosho';
$phone = '0882-321-423';
$age = '24';
$address = 'Hadji Dimitar';

echo
"<style>
    table, tr, td{
         border: 1px solid black;
    }
    table  tr td:first-of-type{
        background-color: orange;
    }
</style>

<table>
<tr><td>Name</td><td>$name</td></tr>
<tr><td>Phone Number</td><td>$phone</td></tr>
<tr><td>Age</td><td>$age</td></tr>
<tr><td>Adress</td><td>$address</td></tr>
</table>";