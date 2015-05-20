namespace Bank.Models.Accounts
{
    using System;
    using Interface;

    abstract class Account : IAccount
    {

        private double _balance;

        protected Account(Customer customer, double balance, double interestRate)
        {
            this.Customer = customer;
            this.Balance = balance;
            this.InteresetRate = interestRate;
            this.DateOfCreation = DateTime.Now;
        }

        public ICustomer Customer { get; private set; }

        public double Balance
        {
            get { return Math.Round(this._balance, 2); }
            protected set { this._balance = value; }
        }

        public double InteresetRate { get; private set; }
        public DateTime DateOfCreation { get; private set; }

        public void Deposit(double amount)
        {
            this.Balance += amount;
        }

        public abstract double CalculateInterest(DateTime toDate);

    }
}
