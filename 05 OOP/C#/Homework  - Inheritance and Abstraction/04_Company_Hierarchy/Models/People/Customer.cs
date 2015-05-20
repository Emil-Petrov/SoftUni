
namespace _04_Company_Hierarchy.Models.People
{
    using System;
    using Company_Hierarchy.Interface.People;
    using Company_Hierarchy.Models.People;

    class Customer : Person, ICustomer
    {
        private double _netPurchaseAmount;

        public Customer(string id, string firstName, 
            string lastName, double netPurchaseAmount) 
            : base(id, firstName, lastName)
        {
            this.NetPurchaseAmount = netPurchaseAmount;
        }

        public double NetPurchaseAmount
        {
            get { return this._netPurchaseAmount; }
            private set
            {
                if (value < 0)
                {
                    throw new ArgumentOutOfRangeException("Net Purchase cannot be negative");
                }
                this._netPurchaseAmount = value;
            }
        }
    }
}
