using System;
using System.Collections.Generic;
using System.Linq;

class ComputerTest
{
    static void Main()
    {
        var computers = new List<Computer> { };

        Console.WriteLine("Enter amount of computers you wish to create");

        int computersAmount = int.Parse(Console.ReadLine());
        for (int i = 0; i < computersAmount; i++)
        {
            Console.Write(string.Format("#{0}; Enter computer name: ", i + 1));
            string pcName = Console.ReadLine();

            Console.Write(string.Format("#{0}; Enter amount of components: ", i + 1));
            int componentCount = int.Parse(Console.ReadLine());

            if (componentCount <= 0)
            {
                throw new ArgumentOutOfRangeException("Amount of components must be higher than 1");
            }

            var components = new List<Component>();
            for (int j = 0; j < componentCount; j++)
            {
                Console.Write(string.Format("#{0}|{1}; Enter component name: ", i + 1, j + 1));
                string cName = Console.ReadLine();
                Console.Write(string.Format("#{0}|{1}; Enter component price: ", i + 1, j + 1));
                double price = double.Parse(Console.ReadLine());
                components.Add(new Component(cName, price));
            }

            computers.Add(new Computer(pcName, components));
        }
        computers = computers.OrderBy(component => component.Price).Reverse().ToList();

        foreach (var computer in computers)
        {
            Console.WriteLine(computer);
        }

        //The method for displaying the whole machine is computer.ShowSpecs();
    }
}
