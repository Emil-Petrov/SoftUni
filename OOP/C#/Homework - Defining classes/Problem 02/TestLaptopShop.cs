using System;

class TestLaptopShop
{
    static void Main()
    {
        //Tips on how to improve output string from the toString() override are welcome.
        Laptop lapitopi = new Laptop("Model name", 123, battery: new Baterry());
        Console.WriteLine(lapitopi);
    }
}
