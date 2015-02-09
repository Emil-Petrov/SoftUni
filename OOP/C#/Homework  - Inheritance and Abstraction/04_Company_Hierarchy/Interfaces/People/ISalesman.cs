namespace Company_Hierarchy.Interface.People
{
    using System.Collections.Generic;
    using Models.Jobs;

    interface ISalesman : IEmployee
    {
        List<Sale> Sales { get; }

        void UpdateSales(List<Sale> sales);
    }
}
