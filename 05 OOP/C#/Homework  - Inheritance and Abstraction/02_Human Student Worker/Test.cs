using System;
using System.Collections.Generic;
using System.Linq;
using _02_Human_Student_Worker;
using _02_Human_Student_Worker.Models;

class Test
{
    static void Main()
    {
        var humans = new List<Human>();
        var students = new List<Student>()
        {
            new Student("Gosho", "Test 0", 10001),
            new Student("Pesho", "Test 1", 90002),
            new Student("Tarzan", "Test 2", 10123),
            new Student("Hitler", "Test 3", 10654),
            new Student("Pikachu", "Test 4", 10079),
            new Student("Bar", "Test 5", 10941),
            new Student("Foo", "Test 6", 10781),
            new Student("Musaka", "Test 7", 15784),
            new Student("KoTaPaKa", "Test 8", 12345),
            new Student("Ka3aH", "Test 9", 54321)
        }.OrderBy(number => number.FaultyNumber).ToList();

        var workers = new List<Worker>()
        {
            new Worker("Maugli", "Junglev", 2, 300),
            new Worker("Pesho", "Goshev", 4, 1337),
            new Worker("Ashmud", "Krachunov", 2, 1000),
            new Worker("Hasparuh", "Pecov", 1, 1000),
            new Worker("Hakuna", "Matata", 1, 7),
            new Worker("foo", "bar", 24, 5),
            new Worker("Love", "Me", 5, 6969),
            new Worker("Long", "Shlong", 10, 700),
            new Worker("Moon", "Moon", 24, 10000),
            new Worker("Full", "Retard", 24, 1)
        }.OrderBy(pay => pay.MoneyPerHour()).ToList();

        foreach (var student in students)
        {
            humans.Add(student);
            Console.WriteLine(student);
        }

        foreach (var worker in workers)
        {
            humans.Add(worker);
            Console.WriteLine(worker);
        }

        humans = humans.OrderBy(name => name.FirstName).ToList();

        foreach (var human in humans)
        {
            Console.Write("{0} {1};\n",human.FirstName, human.LastName);
        }
    }
}
