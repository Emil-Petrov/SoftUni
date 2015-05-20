using System;

namespace Bank.Models
{
    using Interface;
    using Enums;

    public class Customer : ICustomer
    {
        private string _name;

        public string Name
        {
            get { return this._name; }
            private set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentNullException("Name cannot be empty");
                }
                this._name = value;
            }
        }

        public AccountType Type { get; set; }

        public Customer(string name, AccountType type)
        {
            this.Name = name;
            this.Type = type;
        }
    }
}
