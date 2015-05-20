namespace Shop.Reports
{
    using System;
    using System.Text;
    using Marketing;
    using Enums;

    class RentReport : Report
    {
        private Rent _rent;
        public RentReport(Rent item) 
        {
            this.Item = item;
        }

        private new Rent Item
        {
            get { return this._rent; }
            set
            {
                if (value == null)
                {
                    throw new ArgumentNullException("Item cannot be null");
                }
                this._rent = value;
            }
        }

        public override string GenerateReport()
        {
            var sb = new StringBuilder();
            sb.Append("- Rent Overdue\n");
            sb.Append(this.GenerateDefaultReport(this.Item.Item));
            if (this.Item.RentState == RentState.Overdue)
            {
                sb.AppendFormat("Rent fine: {0}", this.Item.CalculateFine());
            }
            sb.AppendLine();
            return sb.ToString();
        }
    }
}
