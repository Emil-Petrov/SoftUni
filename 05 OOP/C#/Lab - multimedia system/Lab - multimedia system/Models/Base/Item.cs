namespace Shop.Items
{
    using System;
    using System.Collections.Generic;
    using Interface;

    public abstract class Item : IItem
    {
        private string _id;
        private string _title;
        private decimal _price;

        protected Item(string id, string title, decimal price, List<string> genres)
        {
            this.Id = id;
            this.Title = title;
            this.Price = price;
            this.Genres = genres;
        }

        protected Item(string id,string title, decimal price)
            : this(id, title, price, null)
        {
            
        }

        public string Id
        {
            get { return this._id; }
            set
            {
                if (value == null || value.Length < 4)
                {
                    throw new ArgumentNullException("Id must be atleast 4 symbols long.");
                }
                this._id = value;
            }
        }
        public string Title
        {
            get { return this._title; }
            private set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentNullException("Title cannot be empty");
                }
                this._title = value;
            }
        }
        public decimal Price
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
        public List<string> Genres { get; private set; }

    }
}
