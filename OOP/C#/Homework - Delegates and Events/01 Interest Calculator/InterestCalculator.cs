using System;
using System.Diagnostics.CodeAnalysis;
using System.Security.AccessControl;

namespace Delegates_and_Events
{
    public class InterestCalculator
    {
        static void Main()
        {

            Func<double, double, int, double> calculateSimpleInterest = delegate(double sum, double interest, int years)
            {
                var returnValue = sum * (1 + (interest / 100) * years);
                Console.WriteLine("Simple interest: {0:#.0000}\nMoney: {1}; Interest: {2}%; Years: {3};", returnValue,sum,interest,years);
                return Math.Round(returnValue, 4);
            };
            Func<double, double, int, double> calculateCompundInterest = delegate(double sum, double interest, int years)
            {
                int compoundRate = 12;
                var returnValue = sum * Math.Pow((1 + (interest / 100) / compoundRate), (years * compoundRate));
                Console.WriteLine("Compound interest: {0:#.0000}\nMoney: {1}; Interest: {2}%; Years: {3};",returnValue, sum,interest,years);
                return returnValue;
            };
            //Both retun a value type double aswell.
            calculateCompundInterest(500, 5.6, 10);
            Console.WriteLine();
            calculateSimpleInterest(2500, 7.2, 15);
        }
    }
}