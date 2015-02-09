using System;

class CheckSqrt
{
    static void Main()
    {
        Console.Write("Enter number: ");
        try
        {
            double input = double.Parse(Console.ReadLine());
            if (input < 0)
            {
                throw new ArgumentOutOfRangeException("Number must be positive or 0");
            }
            Console.WriteLine("Square root of {0} is {1}", input, Math.Sqrt(input));
        }
        catch (FormatException)
        {
            Console.Error.WriteLine("Invalid Number");
        }
        catch (ArgumentOutOfRangeException)
        {
            Console.Error.WriteLine("Invalid Number");
        }
        finally
        {
            Console.WriteLine("Good bye");
        }
    }
}
