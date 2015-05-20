namespace Shop.Interface
{
    using System;
    using Items;

    public interface ISell
    {
        Item Item { get; }
        DateTime SaleDate { get; }
    }
}
