namespace Shop.Marketing
{
    using System;
    using Interface;
    using Items;

    class Sale : ISell
    {
        private Item _item;
        public Sale(Item item, DateTime saleDate) 
        {
            this.Item = item;
            this.SaleDate = saleDate;
        }
        public Sale(Item item)
            : this(item, DateTime.Now)
        {
            
        }

        public Item Item
        {
            get { return this._item; }
            private set
            {
                if (value == null)
                {
                    throw new ArgumentNullException("Item cannot be null.");
                }
                this._item = value;
            }
        }
        public DateTime SaleDate { get; private set; }
    }
}
