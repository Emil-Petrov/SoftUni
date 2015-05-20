namespace Shop.Interface
{
    using System;
    using Enums;
    public interface IRent
    {
        RentState RentState { get; }
        DateTime RentDate { get; }
        DateTime Deadline { get; }
        DateTime ReturnDate { get; }

        decimal CalculateFine();
        void ReturnItem();
    }
}
