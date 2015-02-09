using System;

namespace Company_Hierarchy.Interface.Jobs
{
    interface ISale
    {
        string ProductName { get; }
        DateTime SaleDate { get; }
        double Price { get; }
    }
}
