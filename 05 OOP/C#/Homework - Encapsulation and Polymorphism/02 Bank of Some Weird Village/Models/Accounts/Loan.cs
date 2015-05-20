using System;
using System.Security.Cryptography.X509Certificates;
using Bank.Enums;

namespace Bank.Models.Accounts
{
    class Loan : Account
    {
        public Loan(Customer customer, double balance, double interestRate)
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

            if (this.Customer.Type == AccountType.Company)
            {
                interestFreePeriod = 2;

                if (durationInMonths < interestFreePeriod)
                {
                    return 0;
                }
                return this.Balance*(1 + this.InteresetRate*(durationInMonths - interestFreePeriod));
            }
            else
            {
                interestFreePeriod = 3;

                if (durationInMonths < interestFreePeriod)
                {
                    return 0;
                }
                return this.Balance * (1 + this.InteresetRate * durationInMonths - interestFreePeriod);
            }
        }
    }
}
