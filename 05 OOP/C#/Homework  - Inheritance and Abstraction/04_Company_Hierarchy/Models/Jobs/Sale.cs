namespace Company_Hierarchy.Models.Jobs
{
    using System;
    using Interface.Jobs;

    class Sale : ISale
    {
        private string _productName;
        private DateTime _saleDate;
        private double _price;

        public Sale(string name, double price)
        {
            this.ProductName = name;
            this.Price = price;
            this.SaleDate = DateTime.Now;
        }
        public Sale(string name, double price, DateTime saleDate)
            : this(name, price)
        {
            this.SaleDate = saleDate;
        }

        public string ProductName
        {
            get { return this._productName; }
            private set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentNullException("Product name cannot be null");
                }
                this._productName = value;
            }
        }
        public DateTime SaleDate
        {
            get { return this._saleDate; }
            private set
            {
                if (value > DateTime.Now)
                {
                    throw new IndexOutOfRangeException("Dont sell items in the future");
                }
                this._saleDate = value;
            }
        }
        public double Price
        {
            get { return this._price; }
            private set
            {
                if (value < 0)
                {
                    throw new ArgumentOutOfRangeException("Price cannot be negative");
                }
                this._price = value;
            }
        }
    }
}
