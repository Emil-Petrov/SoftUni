using System;
using System.Threading;
using GenericList;
class Test
{
    static void Main()
    {
        //Problem Number 4 Test
        Type list = typeof (GenericList<>);
        var attributes = list.GetCustomAttributes(false);
        Console.WriteLine("Version: " + attributes[1]);

        Random rnd = new Random();
        //Using do while to test for bugs
        bool loop = false;
        do
        {
            //TODO Fix if list is empty code freezing.
            int magic = rnd.Next(5)+1;
            GenericList<int> genericList = new GenericList<int>(magic);
            Console.WriteLine("Created new list with size of {0}", magic);
            for (int i = 0; i < genericList.Length(); i++)
            {
                magic = rnd.Next(100);
                genericList[i] = magic;
                Console.WriteLine("{0} added to list at index {1};", magic, i);
            }

            magic = rnd.Next(69);
            genericList.Add(magic);
            Console.WriteLine("{0} added to list with method;", magic);
            Console.WriteLine("Index of {0} is {1}", magic, genericList.Find(magic));

            genericList[magic] = rnd.Next(10);
            Console.WriteLine("Now second index is {0}", genericList[magic]);

            genericList.Clear();
            Console.WriteLine("List is reset to default length({0})", genericList.Length());

            int magicNumber = rnd.Next(1000);
            int wizardNumber = rnd.Next(int.MaxValue);
            genericList[magicNumber] = wizardNumber;
            Console.WriteLine("Added a {1} at index {2} list length is now {0}", genericList.Length(), wizardNumber,
                magicNumber);
            Thread.Sleep(10);
        } while (loop);
    }
}
