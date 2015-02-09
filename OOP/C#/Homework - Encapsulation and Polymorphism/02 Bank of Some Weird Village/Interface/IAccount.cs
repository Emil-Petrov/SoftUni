namespace Bank.Interface
{
    interface IAccount
    {
        ICustomer Customer { get; }
        double Balance { get; }
        double InteresetRate { get; }
    }
}
