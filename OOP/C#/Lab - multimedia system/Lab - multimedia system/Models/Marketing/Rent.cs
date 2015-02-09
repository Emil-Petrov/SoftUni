namespace Shop.Marketing
{
    using System;
    using Enums;
    using Interface;
    using Items;

    class Rent : IRent
    {
        private DateTime _rentDate;
        private DateTime _deadLine;
        private DateTime _returnDate;
        private RentState _rentState;
        private Item _rentItem;

        public Rent(Item item,DateTime rentDate, DateTime deadline)
        {
            this.Item = item;
            this.Deadline = deadline;
            this.RentDate = rentDate;
        }
        public Rent(Item item, DateTime rentDate)
            : this(item, rentDate, rentDate.AddDays(30))
        {
            
        }
        public Rent(Item item)
            : this(item, DateTime.Now)
        {
        }

        public Item Item
        {
            get { return this._rentItem; }
            private set
            {
                if (value == null)
                {
                    throw new ArgumentNullException("Item cannot be null");
                }
                this._rentItem = value;
            }
        }
        public RentState RentState
        {
            get
            {
                if (DateTime.Now > this.Deadline && this._rentState == RentState.Pending)
                {
                    return RentState.Overdue;;
                }
                return this._rentState;
            }
            private set { this._rentState = value; }
        }
        public DateTime RentDate
        {
            get { return this._rentDate; }
            private set
            {
                if (value > DateTime.Now)
                {
                    throw new ArgumentOutOfRangeException("Rent date must be now or earlier.");
                }
                this._rentDate = value;
            }
        }
        public DateTime Deadline
        {
            get { return this._deadLine; }
            set
            {
                if (value < this.RentDate)
                {
                    throw new ArgumentOutOfRangeException("Deadline cannot be before rent date.");
                }
                this._deadLine = value;
            }
        }
        public DateTime ReturnDate
        {
            get { return this._returnDate; }
            set
            {
                if (value < RentDate)
                {
                    throw new ArgumentOutOfRangeException("Return date cannot be before rent date.");
                }
                this._returnDate = value;
            }
        }

        public Decimal RentFine
        {
            get { return this.CalculateFine(); }
        }

        //TODO Return 0 if item isn't overdue.
        /// <summary>
        /// Calculates fine for the rented item based on the days it has been overdue
        /// </summary>
        /// <returns>Decimal value rounded to 2 digits after the decimal point</returns>
        public decimal CalculateFine()
        {
                decimal onePercent = decimal.Multiply(this.Item.Price, (decimal) 0.01);
                decimal daysOverdue = (decimal)(DateTime.Now - this.Deadline).TotalDays;
                return Math.Round(decimal.Multiply(daysOverdue, onePercent),2);
        }
        public void ReturnItem()
        {
            this.ReturnDate = DateTime.Now;
            this.RentState = RentState.Returned;;
        }
    }
}
