<?php
$fNum = 1;
$fFloat = 1.1123345;
echo sprintf('$firstNumber + $secondNumber = 2 + 5 = %d + %f = %0.2f',$fNum, $fFloat, round($fNum + $fFloat, 2));