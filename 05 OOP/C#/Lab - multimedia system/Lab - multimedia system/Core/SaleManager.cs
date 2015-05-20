namespace Shop.Core
{
    using System;
    using System.Linq;
    using System.Collections.Generic;
    using Exceptions;
    using Items;
    using Marketing;

    internal class SaleManager
    {
        private static HashSet<Sale> _sales = new HashSet<Sale>();
        private static ShopEngine _shop;

        public static void Sell(string id, DateTime saleTime, ShopEngine shop)
        {
            _shop = shop;
            Item sale = FindItem(id);
            ReduceSupply(sale);
            AddSale(sale,saleTime);
        }
        public static HashSet<Sale> ShowSales()
        {
            return _sales;
        }
        private static Item FindItem(string id)
        {
            return _shop.Supplies.Keys.Where(item => item.Id == id).Cast<Item>().FirstOrDefault();
        }
        private static void AddSale(Item item, DateTime saleTime)
        {
            Sale sale = new Sale(item,saleTime);
            _sales.Add(sale);
        }
        private static void ReduceSupply(Item item)
        {
            if (_shop.Supplies[item] > 0)
            {
                _shop.Supplies[item] -= 1;
            }
            else
            {
                throw new InsufficentSuppliesException("");
            }
        }
    }
}
