using System;

class EnterNumbers
{
    static void Main()
    {
    start:
        try
        {
            Console.Write("Enter start number: ");

            int a = int.Parse(Console.ReadLine());
            if (a <= 1)
            {
                throw new ArgumentOutOfRangeException("value");
            }

            Console.Write("Enter end number: ");

            int b = int.Parse(Console.ReadLine());

            if (b >= 100)
            {
                throw new ArgumentOutOfRangeException("value");
            }
            if (b - a <= 10)
            {
                throw new ArgumentOutOfRangeException("value");
            }

            ReadNumbers(a, b);
        }
        catch (Exception)
        {
            Console.WriteLine("Wrong values, start over!");
            goto start;
        }

    }

    public static void ReadNumbers(int start, int end)
    {
        if (start <= 1 || start >= end || end >= 100)
        {
            throw new ArgumentOutOfRangeException("Value must be in range 1-100");
        }

        int previousNum = 0;
        for (int i = 0; i < 10; i++)
        {
        retry:
            try
            {
                Console.Write("#{0}; Enter Number: ", i + 1);
                int currentNum = int.Parse(Console.ReadLine());
                if (end - currentNum < 10 - i)
                {
                    //How do i make new exceptions!
                    throw new ArgumentOutOfRangeException(
                                "There won't be enough space to enter numbers to finish the game");
                }
                if (i > 0)
                {
                    if (currentNum <= previousNum || currentNum >= end)
                    {
                        throw new ArgumentOutOfRangeException(
                            "Value must be higher than previous and lower than end value");
                    }
                }
                else
                {
                    if (currentNum <= start || currentNum >= end)
                    {
                        throw new ArgumentOutOfRangeException(
                            "Value must be higher than starting value and lower than end value");
                    }

                }
                previousNum = currentNum;
            }
            catch (Exception e)
            {
                Console.Error.WriteLine("Invalid Entry! Try again;");
                goto retry;
            }
        }
    }
}
