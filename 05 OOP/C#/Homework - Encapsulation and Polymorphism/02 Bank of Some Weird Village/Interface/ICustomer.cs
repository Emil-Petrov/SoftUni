
namespace Bank.Interface
{
    using Enums;

    interface ICustomer
    {
        string Name { get; }
        AccountType Type { get; }
    }
}
