<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>

    <style>
        form > input{

            display: block;

        }
        form > input[type='submit']{

            display: inline;

        }
    </style>
</head>
<body>

<div>
    <?php

    if (isset($_POST['submit'])){

        $first_deposit = $_POST['amount'];
        $currency = $_POST['currency'];
        $interest = $_POST['interestAmount'];
        $investment_period = $_POST['period'];

        $total = $first_deposit;

        for ($month = 0; $month < $investment_period; $month++) {

            $total *= (100 + $interest/12)/100;

        }


        if ($currency == 'EUR'){
            echo '€ ';
        }else if($currency == 'USD'){
            echo '$ ';
        }else{
            echo 'BGN ';
        }

        echo   number_format($total, 2, '.', '') . "<br/>";

    }

    ?>
</div>

<form method="post">

    <label for="amount">Enter Amount</label>
    <input id="amount" type="number" name="amount"/>

    <div>
        <input type="radio" id="usd" name="currency" value="USD"/>
        <label for="usd">USD</label>

        <input type="radio" id="eur" name="currency" value="EUR"/>
        <label for="eur">EUR</label>

        <input type="radio" id="bgn" name="currency" value="BGN"/>
        <label for="bgn">BGN</label>
    </div>

    <label for="interestAmount">Compound Interest Amount</label>
    <input type="number" name="interestAmount"/>

    <select name="period" id="period">

        <option value="6">6 Months</option>
        <option value="12">1 Year</option>
        <option value="24">2 Years</option>
        <option value="60">5 Years</option>

    </select>

    <input type="submit" name="submit"/>
</form>
</body>
</html>