<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        table, tr, td, th{
            border: 1px solid black;
        }
    </style>
</head>
<body>
<form method="post">
    <label for="categories">Categories</label>
    <input type="text" id="categories" name="categories"/>
    <br/>

    <label for="tags">Tags</label>
    <input type="text" id="tags" name="tags"/>
    <br/>

    <label for="months">Months</label>
    <input type="text" id="months" name="months"/>
    <br/>

    <input type="submit" name="submit" value="Generate"/>
</form>
<?php
if (isset($_POST['submit'])){
    $categories = explode(', ', $_POST['categories']);
    $tags = explode(', ', $_POST['tags']);
    $months = explode(', ', $_POST['months']);
    ?>
    <aside>
        <nav>
            <div>
                <h4>Categories</h4>
                <ul>
                    <?php
                    foreach ($categories as $category){
                        if ($category == ''){continue;}?>
                        <a href="#"><li><?=$category?></li></a>
                    <?php }?>
                </ul>
            </div>
            <div>
                <h4>Tags</h4>
                <ul>
                    <?php
                    foreach ($tags as $tag){
                        if ($tag == ''){continue;}?>
                        <a href="#"><li><?=$tag?></li></a>
                    <?php }?>
                </ul>
            </div>
            <div>
                <h4>Months</h4>
                <ul>
                    <?php
                    foreach ($months as $month){
                        if ($month == ''){continue;}?>
                        <a href="#"><li><?=$month?></li></a>
                    <?php }?>
                </ul>
            </div>
        </nav>
    </aside>
<?php
}
?>
</body>
</html>