using Bank.Enums;

namespace Bank.Models.Accounts
{
    using Models;
    using System;

    class Mortgage : Account
    {
        public Mortgage(Customer customer, double balance, double interestRate)
            : base(customer, balance, interestRate)
        {
        }

        public override double CalculateInterest(DateTime toDate)
        {
            if (toDate < this.DateOfCreation)
            {
                throw new ArgumentOutOfRangeException("Date must be higher than date of creation");
            }

            int interestFreePeriod;
            int durationInMonths = (toDate.Month - this.DateOfCreation.Month) +
                12 * (toDate.Year - this.DateOfCreation.Year);

            if (this.Customer.Type == AccountType.Individual)
            {
                interestFreePeriod = 6;
                if (durationInMonths < interestFreePeriod)
                {
                    return 0;
                }
                return this.Balance * (1 + this.InteresetRate * durationInMonths - interestFreePeriod);
            }
            else
            {
                interestFreePeriod = 12;
                double halvedInterest = this.Balance * (1 + (this.InteresetRate / 2) * durationInMonths);

                if (durationInMonths < interestFreePeriod)
                {
                    return halvedInterest;
                }
                return this.Balance * (1 + this.InteresetRate * durationInMonths - interestFreePeriod) + halvedInterest;

            }
        }
    }
}
