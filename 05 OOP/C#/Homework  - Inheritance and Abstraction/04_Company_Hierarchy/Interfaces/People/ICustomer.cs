namespace Company_Hierarchy.Interface.People
{
    interface ICustomer : IPerson 
    {
        double NetPurchaseAmount { get; }
    }
}
