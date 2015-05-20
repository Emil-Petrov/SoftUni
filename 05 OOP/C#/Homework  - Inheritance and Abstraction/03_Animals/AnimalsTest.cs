using System;
using System.Collections.Generic;
using System.Linq;
using Animals;
using Animals.Core;

class AnimalsTest
{
    static void Main(string[] args)
    {
        var crazyCatLady = new List<Cat>(5)
        {
            new Cat("Sir Purrsalot", 1, Animal.Genders.Male),
            new Cat("Sir Fartsalot", 5, Animal.Genders.Female),
            new Kitten("Little Pussy", 1),
            new TomCat("Macho", 3),
            new Kitten("Smallcat", 1)
        }.Average(cat => cat.Age);
        Console.WriteLine("Average Cat is {0} Years Old",crazyCatLady);

        var zoo = new List<Animal>(5)
        {
            new Cat("Sir Purrsalot the Second", 12, Animal.Genders.Male),
            new Cat("Sir Purrsalot the Fifth", 4, Animal.Genders.Male),
            new Cat("Sir Purrsalot the Fourth", 8, Animal.Genders.Male),
            new Frog("Shrek Dve", 50, Animal.Genders.Male),
            new Frog("Fiona", 12, Animal.Genders.Female),
            new Dog("Skipo", 1, Animal.Genders.Male)
        };

        AverageHandler.ShowAverageAge(zoo);
    }
}
