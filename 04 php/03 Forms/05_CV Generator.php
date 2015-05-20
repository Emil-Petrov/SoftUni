<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        td, tr, th, table{

            border: 1px solid black;

        }
        /*Using caveman <br/>s like a b0ss will maybe style it but not really
        Also could have set required for all the fields but didn't to make it easier to examine.*/

    </style>
</head>
<body>
<form method="post" action="">
    <fieldset>
        <legend>Personal Information</legend>
        <input type="text" name="fName" placeholder="First Name"/><br/>
        <input type="text" name="lName" placeholder="Last Name"/><br/>
        <input type="email" name="mail" placeholder="Email"/><br/>
        <input type="number" name="phone" placeholder="Phone number"/><br/>

        <label for="male">Male</label>
        <input id="male" type="radio" name="gender" value="Male"/><br/>

        <label for="female">Female</label>
        <input id="female" type="radio" name="gender" value="Female"/><br/>

        <label for="bday">Birth Date</label>
        <input type="date" id="bday" name="bday"/><br/>

        <label for="nationality">Nationality</label>
        <select name="nationality" id="nationality">

            <option value="Bulgarian">Bulgarian</option>
            <option value="Marsian">Marsian</option>
            <option value="Randomanian">Randomanian</option>
            <option value="Imoutofidean">Imoutofidean</option>
            <option value="Dinosaurian">Dinosaurian</option>

        </select><br/>
    </fieldset>
    <fieldset>

        <legend>Last Work Position</legend>

        <label for="company">Company Name</label>
        <input type="text" id="company" name="company"/><br/>

        <label for="from">From</label>
        <input type="date" id="from" name="from"/><br/>

        <label for="to">To</label>
        <input type="date" id="to" name="to"/><br/>
    </fieldset>
    <fieldset>
        <legend>Computer Skills</legend>
        Programming Languages
        <br/>
        <div id="ProgrammingLanguages">
            <input type="text" name="languages[]"/>
            <select name="level[]" id="level">
                <option value="Beginner">Beginner</option>
                <option value="Nerd">Nerd</option>
                <option value="Neckbeard">Neckbeard</option>
                <option value="Programmer">Programmer</option>
                <option value="CodeGod">CodeGod</option>
            </select>
            <br/>
            <input id="addBtn" type="button" onclick="addProgrammingLanguage()" value="Add Language"/><input id="rmvBtn" type="button" onclick="removeProgrammingLanguage()" value="Remove Language"/>
        </div>

    </fieldset>
    <fieldset>

        <legend>Other Skills</legend>
        Languages
        <div id="realLanguages">
            <input id="inputRL" type="text" name="language[]"/>
            <select name="comprehension[]" id="comprehension">

                <option value="" selected disabled>-Comprehension-</option>
                <option value="Bla"   >-Bla-</option>
                <option value="BlaBla">-BlaBla-</option>
                <option value="Hurr"  >-Hurr-</option>
                <option value="Durr"  >-Durr-</option>

            </select>

            <select name="reading[]" id="reading">

                <option value="" selected disabled>-Reading-</option>
                <option value="Bla"   >-Bla-</option>
                <option value="BlaBla">-BlaBla-</option>
                <option value="Hurr"  >-Hurr-</option>
                <option value="Durr"  >-Durr-</option>

            </select>

            <select name="writing[]" id="writing">

                <option value="" selected disabled>-Writing-</option>
                <option value="Bla"   >-Bla-</option>
                <option value="BlaBla">-BlaBla-</option>
                <option value="Hurr"  >-Hurr-</option>
                <option value="Durr"  >-Durr-</option>

            </select>

            <br/>
        </div>

        <input type="button" value="Add Language" onclick="addRealLanguage()"/>
        <input type="button" value="Remove Language" onclick="removeRealLanguage()"/>
        <div id="driverLicense">
            Driver's License
            <label for="licenseB">B</label>
            <input id="licenseB" type="checkbox" name="license[]" value="B"/>

            <label for="licenseA">A</label>
            <input id="licenseA" type="checkbox" name="license[]" value="A"/>

            <label for="licenseC">C</label>
            <input id="licenseC" type="checkbox" name="license[]" value="C"/>
        </div>
    </fieldset>

    <input type="submit" name="submit"/>
</form>
<div>
    <?php
    //Some Warnings appear if some of the values above are not set which can be avoided by making them required be it in php or in the html poriton of the page
    error_reporting(0);
    if (isset($_POST['submit'])) {
        $fName = $_POST['fName'];
        $lName = $_POST['lName'];
        $mail = $_POST['mail'];
        $phone = $_POST['phone'];
        $gender = $_POST['gender'];
        $bday = $_POST['bday'];
        $nationality = $_POST['nationality'];
        $company = $_POST['company'];
        $from = $_POST['from'];
        $to = $_POST['to'];
        $langs = $_POST['languages'];
        $levels = $_POST['level'];
        $realLanguage = $_POST['language'];
        $comprehension = $_POST['comprehension'];
        $reading = $_POST['reading'];
        $writing = $_POST['writing'];
        $license = $_POST['license'];
        $valid = true;
        $namingConstraints = array(
            'options' => array(
                'min_range' => 0,
                'max_range' => 3,
            ));
        if (!filter_var($fName, FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/[a-zA-Z]{2,20}/")))) {
            echo "Your first name must be between 2 or 20 letters <br/>\n";
            $valid = false;
        }
        if (!filter_var($lName, FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/[a-zA-Z]{2,20}/")))) {
            echo "Your last name must be between 2 or 20 letters <br/>\n";
            $valid = false;

        }
        foreach ($realLanguage as $languageEntry) {
            if (!filter_var($fName, FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/[a-zA-Z]{2,20}/")))) {
                echo "The name of the languages you enter must be between 2 or 20 letters  <br/>\n";
                $valid = false;
                break;
            }
        }
        if (!filter_var($company, FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/[a-zA-Z0-9]{2,20}/")))) {
            echo "The name of the company must be between 2 or 20 symbols. Only letters and numbers are allowed  <br/>\n";
            $valid = false;
        }
        if (!filter_var($phone, FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/\\+?([0-9]+-? ?)+[^-]/")))) {
            echo "Invalid phone number. Only numbers + - or empty space are allowed  <br/>\n";
            $valid = false;
        }
        if (!filter_var($mail, FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\\.([a-zA-Z0-9]+)/")))) {
            echo "Invalid email. Only numbers, letters and one of each @ and . are allowed. <br/>\n";
            $valid = false;
        }
            if ($valid):
                ?>
                <h1>CV</h1>
                <table>
                    <thead>
                    <tr>
                        <th colspan="2">Personal Information</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>First Name</td>
                        <td><?= $fName ?></td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td><?= $lName ?></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><?= $mail ?></td>
                    </tr>
                    <tr>
                        <td>Phone Number</td>
                        <td><?= $phone ?></td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td><?= $gender ?></td>
                    </tr>
                    <tr>
                        <td>Birth Date</td>
                        <td><?= $bday ?></td>
                    </tr>
                    <tr>
                        <td>Nationality</td>
                        <td><?= $nationality ?></td>
                    </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                    <tr>
                        <th colspan="2">Last Work Position</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Company Name</td>
                        <td><?= $company ?></td>
                    </tr>
                    <tr>
                        <td>From</td>
                        <td><?= $from ?></td>
                    </tr>
                    <tr>
                        <td>To</td>
                        <td><?= $to ?></td>
                    </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                    <tr>
                        <th colspan="4">Computer Skills</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td colspan="2">Programming Languages</td>
                        <td colspan="2">
                            <table>
                                <thead>
                                <tr>
                                    <th>Language</th>
                                    <th>Skill Level</th>
                                </tr>
                                </thead>
                                <tbody>
                                <?php

                                for ($entry = 0; $entry < count($langs); $entry++) {
                                    echo "<tr>
<td>{$langs[$entry]}</td>
<td>{$levels[$entry]}</td>
</tr>";
                                }
                                ?>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                    <tr>
                        <th colspan="2">Other Skills</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Languages</td>
                        <td>
                            <table>
                                <thead>
                                <tr>
                                    <th>Language</th>
                                    <th>Comprehension</th>
                                    <th>Reading</th>
                                    <th>Writing</th>
                                </tr>
                                </thead>
                                <tbody>
                                <?php

                                for ($entry = 0; $entry < count($realLanguage); $entry++) {

                                    echo "<tr>
<td>{$realLanguage[$entry]}</td>
<td>{$comprehension[$entry]}</td>
<td>{$reading[$entry]}</td>
<td>{$writing[$entry]}</td>
</tr>";
                                }
                                ?>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>Driver's license</td>
                        <td><?= implode(',', $license) ?></td>
                    </tr>
                    </tbody>
                </table>
            <?php
            endif;
    }
    ?>
</div>
<script>

    function addProgrammingLanguage(){

        //Could have just copied the div and removed the id from the copy and shoved it into the parent but nah...

        var current, appendLang, appendLvl, br, addBtnCopy, rmvBtnCopy;

        var bla = document.createElement('div');
        //Create new dropdown input menu
        appendLang = document.createElement('input');
        appendLang.type='text';
        appendLang.name='languages[]';

        //Create dropdown and add levels to it
        appendLvl = document.createElement('select');
        appendLvl.name = 'level[]';
        addOption(appendLvl, 'Beginner');
        addOption(appendLvl, 'Nerd');
        addOption(appendLvl, 'Neckbeard');
        addOption(appendLvl, 'Programmer');
        addOption(appendLvl, 'CodeGod');

        //NewLine
        br = document.createElement('br');

        //Delete Old buttons and add new at the end
        addBtnCopy = document.getElementById('addBtn');
        rmvBtnCopy = document.getElementById('rmvBtn');
        document.getElementById('addBtn').parentNode.removeChild(document.getElementById('addBtn'));
        document.getElementById('rmvBtn').parentNode.removeChild(document.getElementById('rmvBtn'));


        current = document.getElementById('ProgrammingLanguages');

        bla.appendChild(appendLang);
        bla.appendChild(appendLvl);
        bla.appendChild(br);
        bla.appendChild(addBtnCopy);
        bla.appendChild(rmvBtnCopy);

        current.parentElement.appendChild(bla);

        function addOption(element,name){

            var option = document.createElement('option');
            option.value = name;
            option.text = name;

            element.add(option);
        }

    }


    function removeProgrammingLanguage(){
        var current = document.getElementById('ProgrammingLanguages');


        //Well somehow there is a minimum of 7 elements out there so that is what the se7en is for. (Prevents removal if there is only one element)
        if (!(current.parentNode.childNodes.length == 7)){
            var addBtnCopy = document.getElementById('addBtn');
            var rmvBtnCopy = document.getElementById('rmvBtn');


            current.parentElement.lastElementChild.remove();

            current.parentNode.lastElementChild.appendChild(addBtnCopy);
            current.parentNode.lastElementChild.appendChild(rmvBtnCopy);
        }

    }


    function addRealLanguage(){

        var theChosenOne = document.getElementById('realLanguages');
        var temp = theChosenOne.cloneNode(true);
        temp.removeAttribute('id');
        temp.getElementsByTagName('input')[0].value = '';
        theChosenOne.parentElement.insertBefore(temp, theChosenOne.parentElement.lastChild.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling);

    }
    function removeRealLanguage(){

        var  theChosenOne = document.getElementById('realLanguages');

        //Used to be 7 too but moved the btns out of the div. Should have done the same for the above but then again this isn't javascript basics right?
        if (!(theChosenOne.parentNode.childNodes.length <= 10)){
            theChosenOne.parentElement.lastChild.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.remove();
        }


    }
</script>
</body>
</html>