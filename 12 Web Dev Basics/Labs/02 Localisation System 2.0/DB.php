<?php

class DB
{
    public static function getInstance(){
        return new PDO("mysql:host=localhost;dbname=translations", "root", "");
    }
}