using System;

namespace Bank
{
    using System.Collections.Generic;
    using Enums;
    using Models;
    using Models.Accounts;
    class BankTest
    {
        static void Main(string[] args)
        {
            Customer person = new Customer("Pesho", AccountType.Individual);
            Customer company = new Customer("Gosho", AccountType.Company);

            //I have no knowledge of deposits and banking at all. Excuse me for the instane ammount of interest... or not.
            List<Account> accounts = new List<Account>
            {
                new Deposit(person,1100,3.4),
                new Deposit(company,2000,3.4),

                new Loan(person,100,1.2),
                new Loan(company,1000,1.2),

                new Mortgage(person,3000,2),
                new Mortgage(company,3000,2)
            };

            foreach (var account in accounts)
            {
                DateTime toDate = new DateTime(2016, 12, 25);
                Console.WriteLine("######################################################");
                Console.WriteLine("Amount of interest for {0}({1:c0})\nMade by {2} ({3}) on {4:dd-MM-yyyy} to {5:dd-MM-yyyy}\n{6:C0};",
                    account.GetType().Name, account.Balance,
                    account.Customer.Name, account.Customer.Type, 
                    account.DateOfCreation, toDate,
                    account.CalculateInterest(toDate));
            }
            Console.WriteLine("######################################################");
        }
    }
}
