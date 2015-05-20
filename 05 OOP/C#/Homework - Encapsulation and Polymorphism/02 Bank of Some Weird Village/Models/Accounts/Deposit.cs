

namespace Bank.Models.Accounts
{
    using System;
    using Models;

    class Deposit : Account
    {
        public Deposit(Customer customer, double balance, double interestRate) : base(customer, balance, interestRate)
        {
        }

        public override double CalculateInterest(DateTime toDate)
        {
            if (toDate < this.DateOfCreation)
            {
                throw new ArgumentOutOfRangeException("Date must be higher than date of creation");
            }
            if (this.Balance > 0 && this.Balance < 1000)
            {
                return 0;
            }
            int durationInMonths = (toDate.Month - this.DateOfCreation.Month) +
                12 * (toDate.Year - this.DateOfCreation.Year);
            return this.Balance * (1 + this.InteresetRate * durationInMonths);
        }

        public void withdraw(double amount)
        {
            this.Balance -= amount;
        }
    }
}
