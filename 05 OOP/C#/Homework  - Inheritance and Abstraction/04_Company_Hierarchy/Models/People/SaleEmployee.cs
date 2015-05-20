namespace Company_Hierarchy.Models.People
{
    using System.Collections.Generic;
    using System.Linq;
    using Enums;
    using Interface.People;
    using Jobs;

    class SaleEmployee : Employee, ISalesman
    {
        public SaleEmployee(string id, string firstName,
            string lastName, Departments deparment,
            double salary, List<Sale> sales) 
            : base(id, firstName, lastName, deparment, salary)
        {
            this.Sales = sales;
        }

        public List<Sale> Sales { get; private set; }

        public void UpdateSales(List<Sale> newSales)
        {
            this.Sales = this.Sales.Concat(newSales).ToList();
        }
    }
}
