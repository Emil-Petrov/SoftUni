

namespace Animals.Core
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    class AverageHandler
    {
        public static void ShowAverageAge(List<Animal> animals)
        {
            foreach (var animal in getAverageAnimalAge(animals))
            {
                Console.WriteLine("{0} have {1} years average lifespan", animal.Key, animal.Value);
            }
        }

        private static Dictionary<string, double> getAverageAnimalAge(List<Animal> list)
        {
            var averageAges = new Dictionary<string, double>();

            try
            {
                double averageAge = Math.Round(list.OfType<Cat>().Average(animal => animal.Age), 2);
                averageAges.Add("Cats", averageAge);
            }
            catch { }

            try
            {
                double averageAge = Math.Round(list.OfType<Dog>().Average(animal => animal.Age), 2);
                averageAges.Add("Dogs", averageAge);
            }
            catch { }

            try
            {
                double averageAge = Math.Round(list.OfType<Frog>().Average(animal => animal.Age), 2);
                averageAges.Add("Frogs", averageAge);
            }
            catch { }

            try
            {
                double averageAge = Math.Round(list.OfType<Kitten>().Average(animal => animal.Age), 2);
                averageAges.Add("Kittens", averageAge);
            }
            catch { }

            try
            {
                double averageAge = Math.Round(list.OfType<TomCat>().Average(animal => animal.Age), 2);
                averageAges.Add("TomCats", averageAge);
            }
            catch { }

            return averageAges;
        }
    }
}