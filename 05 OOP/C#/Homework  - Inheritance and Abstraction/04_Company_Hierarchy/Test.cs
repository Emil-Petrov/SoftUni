using System;
using System.Collections.Generic;
using System.Diagnostics;
using Company_Hierarchy.Enums;
using Company_Hierarchy.Models.Jobs;
using Company_Hierarchy.Models.People;

class Test
{
    static void Main()
    {
        var sales = new List<Sale>
        {
            new Sale("Potato", 20),
            new Sale("Potato Juice",25),
            new Sale("Potato Cake",30),
            new Sale("Potato Bath",100)
        };
        var projects = new List<Project>
        {
            new Project("Kawaii Desu Adventures",
                new DateTime(2014, 01, 12, 3, 50, 10),
                "Little kawaii desu goes on an adveture to find the dragon pony and marry his handsome son"),
            new Project("Uguu Neckbeard Rampage",
                DateTime.Now,"Neckbeard Rampage part 2."),
            new Project("Pony Mony Dash", new DateTime(2000,1,1)
                ,"The boss' new year resolution")
        };

        var salesMan = new SaleEmployee("test2", "ISell", "Potato", Departments.Sales, 500, sales);
        var devMan = new Developer("4w350m", "Dev", "Man", Departments.Production, 1000, projects);
        var mladMerinjei = new Manager("test1","Bati","Gosho",Departments.Marketing, 5000,new List<Employee>{salesMan, devMan});

        var potatoCorp = new List<Person>
        {
            salesMan,
            devMan,
            mladMerinjei
        };

        foreach (var person in potatoCorp)
        {
            Console.WriteLine(person);
        }
    }
}
