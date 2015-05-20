namespace Shop.Reports
{
    using System;
    using System.Text;
    using Marketing;

    class SaleReport : Report
    {
        private Sale _sale;

        public SaleReport(Sale sale)
        {
            this.Sale = sale;
        }

        private Sale Sale
        {
            get { return this._sale; }
            set
            {
                if (value == null)
                {
                    throw new ArgumentNullException("Sale cannot be null");
                }
                this._sale = value;
            }
        }

        public override string GenerateReport()
        {
            var sb = new StringBuilder();
            sb.AppendFormat("- Sale {0}", this.Sale.SaleDate);
            sb.AppendLine();
            sb.Append(this.GenerateDefaultReport(this.Sale.Item));
            sb.AppendLine();
            return sb.ToString();
        }
    }
}
